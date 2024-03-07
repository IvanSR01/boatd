import { FC } from "react";
import * as MaterialIcons from "react-icons/fa";
import { TypeMaterialIconName } from "../types/icon.type";

export const MaterialIcon: FC<{ name: TypeMaterialIconName }> = ({ name }) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent /> || <MaterialIcons.Fa500Px />;
};
