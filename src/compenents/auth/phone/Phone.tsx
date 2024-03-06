"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./Phone.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { useAppSelector } from "@/hook/useActions";
import clsx from "clsx";
import { FaEye } from "react-icons/fa";
import Button from "@/shared/ui/button/Button";
import { TypePropsPhone } from "./Phone.type";
import Link from "next/link";
const Phone: FC<TypePropsPhone> = ({ isLogin, onClick, onSubmit, type }) => {
  const { data, code } = useAppSelector((state) => state[type]);
  const [pincode, setPincode] = useState("");
  const [error, setError] = useState("");
  const submitHandle = () => {
    if (code !== pincode) return setError("Неверный код");
    onSubmit();
  };
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={styles.heading}>
        <IoIosArrowDown onClick={onClick} />
        <div>
          <p>Подтвердите номер</p>
        </div>
        <div></div>
      </div>
      <span>Введите код, отправленный на номер {data.phone}</span>
      <div className={styles.pin}>
        <div className={clsx(styles.item)}>
          <input
            className={clsx(styles.input, error ? styles.error : styles.border)}
            id={"bic"}
            placeholder={"Код"}
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <label htmlFor={"bic"}>Код</label>
          {error && <p>{error}</p>}
          <FaEye />
        </div>
        <Button
          onClick={() => submitHandle()}
          variant="1"
          className={styles.button}
        >
          Далее
        </Button>
      </div>
      {isLogin && (
        <div className={styles.bottom}>
          <p>У вас нет аккаунта?</p>
          <Link href={"/"}>Зарегестрироваться</Link>
        </div>
      )}
    </div>
  );
};

export default Phone;
