import { $axios } from "@/$api/axios.api";
import { getTokens, saveTokens } from "@/$api/tokens.api";
import {
  TypeLogin,
  TypeRegisterSeller,
  TypeRegisterUser,
} from "@/shared/types/auth.type";
import { IUser } from "@/shared/types/user.type";
import axios from "axios";

type TypeCheckPhone = {
  code: string;
	role?: string
};

class AuthService {
  private saveNewToken(data: IUser) {
    if (data.accessToken) {
      saveTokens({
        accessToken: data.accessToken,
        refreshToken: data.accessToken,
      });
    }
  }
  async getCode(phone: string, isLogin: boolean): Promise<TypeCheckPhone> {
    const res = await $axios.post<TypeCheckPhone>("/auth/getCode", {
      phone,
      isLogin,
    });
    return res.data;
  }

  async login(props: TypeLogin) {
    const { data } = await $axios.post<IUser>("/auth/login", { ...props });

    this.saveNewToken(data);

    return data;
  }

  async singUpSeller(props: TypeRegisterSeller) {
    const { data } = await $axios.post<IUser>("/auth/registerSeller", {
      ...props,
    });

    this.saveNewToken(data);

    return data;
  }

  async singUpUser(props: TypeRegisterUser) {
    const { data } = await $axios.post<IUser>("/auth/registerSeller", {
      ...props,
    });

    this.saveNewToken(data);

    return data;
  }

  async getNewTokens() {
    const { refreshToken } = getTokens();
    const { data } = await $axios<IUser>({
      url: `/login/access-Token`,
      method: "post",
      data: { refreshToken },
    });
    this.saveNewToken(data);
    return data;
  }
}

export default new AuthService();
