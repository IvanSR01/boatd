'use client'
import Phone from "@/compenents/auth/phone/Phone";
import Header from "@/compenents/header/Header";
import { useAppDispatch, useAppSelector } from "@/hook/useActions";
import { TypeRegisterSeller } from "@/shared/types/auth.type";
import { singUpSeller } from "@/store/action/auth.action";
import { useRouter } from "next/navigation";
import styles from "../VerifyPhone.module.scss";
const VerifyPhoneSeller = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const { data } = useAppSelector((state) => state.registerSeller);
  const onSubmit = () => {
    dispatch(singUpSeller(data as TypeRegisterSeller));
  };
  const onClick = () => push(`/auth/register/seller`);
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Phone
          isLogin={false}
          type={"registerSeller"}
          onClick={() => onClick()}
          onSubmit={() => onSubmit()}
        />
      </div>
    </>
  );
};

export default VerifyPhoneSeller;
