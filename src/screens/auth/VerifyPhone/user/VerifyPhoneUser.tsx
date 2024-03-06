"use client";
import Phone from "@/compenents/auth/phone/Phone";
import Header from "@/compenents/header/Header";
import { useAppDispatch, useAppSelector } from "@/hook/useActions";
import { singUpUser } from "@/store/action/auth.action";
import { useRouter } from "next/navigation";
import styles from "../VerifyPhone.module.scss";
const VerifyPhoneUser = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const { data } = useAppSelector((state) => state.registerUser);
  const onSubmit = () => {
    dispatch(singUpUser(data));
  };
  const onClick = () => push(`/auth/register/user`);
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Phone
          isLogin={false}
          type={"registerUser"}
          onClick={() => onClick()}
          onSubmit={() => onSubmit()}
        />
      </div>
    </>
  );
};

export default VerifyPhoneUser;
