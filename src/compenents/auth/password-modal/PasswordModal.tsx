"use client";
import Button from "@/shared/ui/button/Button";
import Link from "next/link";
import { FC, useState } from "react";
import styles from "./PasswordModal.module.scss";
import clsx from "clsx";
import { FaEye } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { TypePropsPasswordModal } from "./PasswordModa.type";
import { useAppDispatch, useAppSelector } from "@/hook/useActions";
import { singIn } from "@/store/action/auth.action";
import setPhone from "@/shared/utils/setPhone";
const PasswordModal: FC<TypePropsPasswordModal> = ({ onClick, type }) => {
  const error = useAppSelector((state) => state.user.error);
	console.log(error)
	const phone = localStorage.getItem('phone')
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const submitHandle = async () => {
		console.log(password)
    dispatch(singIn({ phone: setPhone(phone as string), password }));
  };
	const onChange = (e: any) => {
		console.log(e)
		setPassword(e.target.value)
	}
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <IoIosArrowDown onClick={onClick} />
        <div>
          <p>Введите пароль</p>
        </div>
        <div></div>
      </div>
      <span>Введите пароль</span>
      <div className={styles.pin}>
        <div className={clsx(styles.item)}>
          <input
            className={clsx(styles.input, error ? styles.error : styles.border)}
            id={"password"}
            placeholder={"Пароль"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor={"password"}>Пароль</label>
          {error && <p>{error}</p>}
          <FaEye />
        </div>
        <Button
          onClick={() => submitHandle()}
          className={styles.button}
        >
          Далее
        </Button>
      </div>
      <div className={styles.bottom}>
        <p>У вас нет аккаунта?</p>
        <Link href={"/"}>Зарегестрироваться</Link>
      </div>
    </div>
  );
};

export default PasswordModal;
