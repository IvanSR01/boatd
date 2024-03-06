"use client";
import { errorCatch } from "@/$api/api.helpers";
import Header from "@/compenents/header/Header";
import { useAppDispatch } from "@/hook/useActions";
import authService from "@/service/auth-service/auth.service";
import { TypeHasUser } from "@/shared/types/auth.type";
import Button from "@/shared/ui/button/Button";
import { MaterialIcon } from "@/shared/ui/icon";
import setPhone from "@/shared/utils/setPhone";
import { loginSeller } from "@/shared/var/login";
import { setUserRegisterion } from "@/store/slice/registretion-user.slice";
import { useMutation } from "@tanstack/react-query";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCreditCard } from "react-icons/fa6";
import { IoIosArrowDown, IoIosDocument } from "react-icons/io";
import styles from "../Auth.module.scss";
import AuthSelect from "../select/Select";

const RegisterSeller: FC = () => {
  const options = ["Физлица и самозанятые", "ООО и ИП"];
  const [selected, setSelected] = useState("");
  const [agree, setAgree] = useState({
    isPersonal: false,
    isConf: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm();
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const { mutate: mutateHas } = useMutation({
    mutationFn: ({ phone, email }: TypeHasUser) =>
      authService.hasUser(phone, email),
    onError: (err: any) => {
      setError(err?.data?.message?.type as string, {
        message: errorCatch(err),
      });
    },
    onSuccess: async (data) => {
      const res = await authService.getCode(setPhone(data.phone));
      dispatch(
        setUserRegisterion({
          ...getValues(),
          phone: setPhone(data.phone),
          paymentInfo: {
            status: selected,
            nameACompany: getValues("nameACompany"),
            itn: getValues("itn"),
            bic: getValues("bic"),
            cardNumber: getValues("cardNumber"),
            paymentAccount: getValues("paymentAccount"),
          },
          code: res.code,
        })
      );
      push("/auth/verify-phone/user");
    },
  });
  const onSubmit = async (data: any) => {
    if (data.password !== data.confirm)
      return setError("confirm", {
        message: "Пароль не совпадают",
      });
    mutateHas({ phone: data.phone, email: data.email });
  };
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.heading}>
            <IoIosArrowDown onClick={() => push("/")} />
            <p>Регистрация владельца</p>
          </div>
          <div className={styles.items}>
            {loginSeller.map((item, i) => (
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
          <div>
            <AuthSelect
              selected={selected}
              setAction={(i) => setSelected(options[i as number])}
              options={options}
              placeholder="Юр статус"
              className={styles.select}
            />
          </div>
          {selected && (
            <>
              {selected === "Физлица и самозанятые" ? (
                <div className={styles.items}>
                  <span>
                    Если хотите получать оплату от покупателей, заполните:
                  </span>
                  <div
                    className={clsx(
                      styles.item,
                      errors["itn"] ? styles.error : ""
                    )}
                  >
                    <input
                      {...register("itn", { required: true })}
                      className={clsx(
                        styles.input,
                        errors["itn"] ? styles.error : styles.border
                      )}
                      id={"itn"}
                      placeholder={"ИНН"}
                    />
                    <label htmlFor={"itn"}>ИНН</label>
                    {errors["itn"] && <p>Заполните поле</p>}
                    <MaterialIcon name={"FaUserAlt"} />
                  </div>
                  <div
                    className={clsx(
                      styles.item,
                      errors["cardNumber"] ? styles.error : ""
                    )}
                  >
                    <input
                      {...register("cardNumber", { required: true })}
                      className={clsx(
                        styles.input,
                        errors["cardNumber"] ? styles.error : styles.border
                      )}
                      id={"cardNumber"}
                      placeholder={"Номер банковской карты"}
                    />
                    <label htmlFor={"cardNumber"}>Номер банковской карты</label>
                    {errors["cardNumber"] && <p>Заполните поле</p>}
                    <FaCreditCard />
                  </div>
                </div>
              ) : (
                <div className={styles.items}>
                  <div
                    className={clsx(
                      styles.item,
                      errors["itn"] ? styles.error : ""
                    )}
                  >
                    <input
                      {...register("nameACompany", { required: true })}
                      className={clsx(
                        styles.input,
                        errors["nameACompany"] ? styles.error : styles.border
                      )}
                      id={"nameACompany"}
                      placeholder={"Наименование организации"}
                    />
                    <label htmlFor={"nameACompany"}>
                      Наименование организации
                    </label>
                    {errors["nameACompany"] && <p>Заполните поле</p>}
                    <IoIosDocument />
                  </div>
                  <span>
                    Если хотите получать оплату от покупателей, заполните:
                  </span>
                  <div
                    className={clsx(
                      styles.item,
                      errors["itn"] ? styles.error : ""
                    )}
                  >
                    <input
                      {...register("itn", { required: true })}
                      className={clsx(
                        styles.input,
                        errors["itn"] ? styles.error : styles.border
                      )}
                      id={"itn"}
                      placeholder={"ИНН"}
                    />
                    <label htmlFor={"itn"}>ИНН</label>
                    {errors["itn"] && <p>Заполните поле</p>}
                    <MaterialIcon name={"FaUserAlt"} />
                  </div>
                  <div
                    className={clsx(
                      styles.item,
                      errors["paymentAccount"] ? styles.error : ""
                    )}
                  >
                    <input
                      {...register("paymentAccount", { required: true })}
                      className={clsx(
                        styles.input,
                        errors["paymentAccount"] ? styles.error : styles.border
                      )}
                      id={"paymentAccount"}
                      placeholder={"Расчетный счет"}
                    />
                    <label htmlFor={"paymentAccount"}>Расчетный счет</label>
                    {errors["paymentAccount"] && <p>Заполните поле</p>}
                    <FaCreditCard />
                  </div>
                  <div
                    className={clsx(
                      styles.item,
                      errors["bic"] ? styles.error : ""
                    )}
                  >
                    <input
                      {...register("bic", { required: true })}
                      className={clsx(
                        styles.input,
                        errors["bic"] ? styles.error : styles.border
                      )}
                      id={"bic"}
                      placeholder={"БИК Банка"}
                    />
                    <label htmlFor={"bic"}>БИК Банка</label>
                    {errors["bic"] && <p>Заполните поле</p>}
                    <FaCreditCard />
                  </div>
                </div>
              )}
            </>
          )}
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
                  id="ripple-on"
                  type="checkbox"
                  checked={agree.isConf}
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

export default RegisterSeller;
