import { FC } from "react";
import { TypePropsButton } from "./Button.type";
import styles from "./Button.module.scss";
import clsx from "clsx";
const Button: FC<TypePropsButton> = ({
  children,
  onClick,
  className,
  disable,
}) => {
  const handleClick = (e: any) => {
    if (disable) return;
    onClick && onClick(e);
  };
  return (
    <button
      disabled
      onClick={handleClick}
      className={clsx(styles.button, className)}
    >
      {children}
    </button>
  );
};

export default Button;
