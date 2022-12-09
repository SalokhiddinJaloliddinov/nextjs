import React from "react";

import { ButtonProps } from "src/utils/types";
import { buttonStyles } from "../../utils/styles/button";

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  size,
  className,
}) => {
  let styles;
  switch (type) {
    case "primary":
      styles = buttonStyles.primary;
      break;
    case "secondary":
      styles = buttonStyles.secondary;
      break;
    case "warning":
      styles = buttonStyles.warning;
      break;
    case "info":
      styles = buttonStyles.info;
      break;
    case "danger":
      styles = buttonStyles.danger;
      break;
    case "success":
      styles = buttonStyles.success;
      break;
  }
  const initial_styles =
    "py-2 px-3 transition-colors rounded-md font-medium text-sm";

  return (
    <button className={`${initial_styles} ${styles} ${className}`}>
      {children}
    </button>
  );
};
