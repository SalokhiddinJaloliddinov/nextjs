import React, { CSSProperties } from "react";
import { IconType } from "./icons";

export enum TicketClasses {
  "DeliveryRequest",
  "Incident",
  "UserRequest",
  "DevelopmentRequest",
}

export interface ButtonProps {
  size?: number | string;
  type?: "primary" | "secondary" | "success" | "warning" | "info" | "danger";
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export interface NavButtonProps {
  obj: {
    name: string;
    icon: React.FC<IconType>;
    href: string;
  };
  path: string;
}
