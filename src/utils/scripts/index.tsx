import { TicketClasses } from "../types";
import count from "src/components/widgets/count/Count.module.scss";
import {
  BracesIcon,
  IncidentIcon,
  MailIcon,
  TruckIcon,
} from "../../components/icons";
import variables from "../../../styles/variables.module.scss";
import React from "react";

export function getCountIcon(final_class: string | TicketClasses) {
  switch (final_class) {
    case "DevelopmentRequest":
      return (
        <div className={count.icon_block__red}>
          <BracesIcon size={20} color={variables.whiteColor} />
        </div>
      );
    case "Incident":
      return (
        <div className={count.icon_block__yellow}>
          <IncidentIcon size={20} color={variables.whiteColor} />
        </div>
      );
    case "UserRequest":
      return (
        <div className={count.icon_block__primary}>
          <MailIcon size={20} color={variables.whiteColor} />
        </div>
      );
    case "DeliveryRequest":
      return (
        <div className={count.icon_block__green}>
          <TruckIcon size={20} color={variables.whiteColor} />
        </div>
      );
  }
}
