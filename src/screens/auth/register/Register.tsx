"use client";
import Header from "@/compenents/header/Header";
import { MaterialIcon } from "@/shared/ui/icon";
import { loginSeller, loginUser } from "@/shared/var/login";
import { FC, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styles from "../Auth.module.scss";
import Button from "@/shared/ui/button/Button";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import Select from "@/shared/ui/select/Select";
import { FaCreditCard } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import authService from "@/service/auth-service/auth.service";
import { errorCatch } from "@/$api/api.helpers";
import { useAppDispatch } from "@/hook/useActions";
import { setUserRegisterion } from "@/store/slice/registretion-user.slice";
import { useRouter } from "next/navigation";
import setPhone from "@/shared/utils/setPhone";

const Register: FC = () => {
  const [agree, setAgree] = useState({
    isPersonal: false,
    isConf: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({});
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const onSubmit = async (data: any) => {
    if (data.password !== data.confirm)
      return setError("confirm", {
        message: "Пароль не совпадают",
      });
    try {
      const res = await authService.getCode(setPhone(data.phone), false);
      console.log(res);
      dispatch(
        setUserRegisterion({
          ...data,
          phone: setPhone(data.phone),
          code: res.code,
        })
      );

      push("/auth/verify-phone/user");
    } catch (error) {
      setError("phone", {
        message: errorCatch(error),
      });
    }
  };
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.heading}>
            <IoIosArrowDown onClick={() => push("/")} />
            <p>Регистрация покупателя</p>
          </div>
          <div className={styles.items}>
            {loginUser.map((item, i) => (
              <div
                className={clsx(
                  styles.item,
                  errors[item.name] ? styles.error : ""
                )}
                key={i}
              >
                <input
                  {...register(item.name, { required: "Заполните поле" })}
                  className={clsx(
                    styles.input,
                    errors[item.name] ? styles.error : styles.border
                  )}
                  id={item.name}
                  placeholder={item.placeholder}
                />
                <label htmlFor={item.name}>{item.placeholder}</label>
                {errors[item.name] && (
                  <p>{errors[item.name]?.message?.toString()}</p>
                )}
                <MaterialIcon name={item.svg} />
              </div>
            ))}
          </div>
          <div
            className={styles.agree}
            onClick={() =>
              setAgree({ ...agree, isPersonal: !agree.isPersonal })
            }
          >
            <div
              className="inline-flex items-center"
              style={{
                gap: "20px",
              }}
            >
              <label
                className="relative flex items-center rounded-full cursor-pointer"
                htmlFor="ripple-on"
                data-ripple-dark="true"
              >
                <input
                  checked={agree.isPersonal}
                  id="ripple-on"
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor="ripple-on"
              >
                Даю согласие на обработку персональных данных
              </label>
            </div>
          </div>
          <div
            className={styles.agree}
            onClick={() => setAgree({ ...agree, isConf: !agree.isConf })}
          >
            <div
              className="inline-flex items-center"
              style={{
                gap: "20px",
              }}
            >
              <label
                className="relative flex items-center rounded-full cursor-pointer"
                htmlFor="ripple-on"
                data-ripple-dark="true"
              >
                <input
                  checked={agree.isConf}
                  id="ripple-on"
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor="ripple-on"
              >
                Принимаю пользовательское соглашение и политику
                конфиденциальности
              </label>
            </div>
          </div>
          <Button type="submit" className={styles.button}>
            Продолжить
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
