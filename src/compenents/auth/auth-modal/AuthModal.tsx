"use client";
import { FC, useState } from "react";
import styles from "./AuthModal.module.scss";
import { TypePropsAuthModal } from "./AuthModal.type";
import { IoClose } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import clsx from "clsx";
import Button from "@/shared/ui/button/Button";
import Link from "next/link";
import authService from "@/service/auth-service/auth.service";
import { useDispatch } from "react-redux";
import { setState } from "@/store/slice/registretion-seller.slice";
import { setUserRegisterion } from "@/store/slice/registretion-user.slice";
import { errorCatch } from "@/$api/api.helpers";
import fromatPhone from "@/shared/utils/setPhone";
const AuthModal: FC<TypePropsAuthModal> = ({
  onClick,
  setNextState,
  setRole,
  setResetPage,
}) => {
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const submitHandle = async () => {
    try {
      // const res = await authService.getCode(fromatPhone(phone), true);

      // if (res.role === "seller") {
      //   dispatch(
      //     setState({
      //       code: res.code,
      //     })
      //   );
      //   setRole("registerSeller");
      // } else {
      //   dispatch(
      //     setUserRegisterion({
      //       code: res.code,
      //     })
      //   );
      //   setRole("registerUser");
      // }
			localStorage.setItem('phone', phone)
      setNextState();
      onClick();
    } catch (error) {
      setError(errorCatch(error));
    }
  }; 
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <div></div>
        <div>
          <p>Подтвердите номер</p>
        </div>
        <IoClose onClick={onClick} />
      </div>
      <span>Введите свой номер телефона</span>
      <div className={styles.pin}>
        <div className={clsx(styles.item)}>
          <input
            className={clsx(styles.input, error ? styles.error : styles.border)}
            id={"phone"}
            placeholder={"Телефон"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor={"phone"}>Телефон</label>
          {error && <p>{error}</p>}
          <FaEye />
        </div>
        <Button onClick={() => submitHandle()} className={styles.button}>
          Далее
        </Button>
      </div>
      <div className={styles.bottom}>
        <p>У вас нет аккаунта?</p>
        <Link href={"/auth/register/user"}>Зарегестрироваться</Link>
      </div>
      <div className={styles.bottom}>
        <div className={styles.change}>
          <p onClick={() => {
						
						setResetPage()}}>Восстановить данные аккаунта</p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
