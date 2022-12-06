import React from "react";
import CountCard from "./CountCard";
import { inspect } from "util";
import styles from "./Count.module.scss";
import { MailIcon, NavigatorIcon } from "src/components/icons";

const data = [
  { data: "32,912", diff: "0.3%", final_class: "UserRequest" },
  { data: "5,211", diff: "8%", final_class: "Incident" },
  { data: "12,213", diff: "2%", final_class: "DeliveryRequest" },
  { data: "12", diff: "30%", final_class: "DevelopmentRequest" },
];

const CountTicket = () => {
  return (
    <div className={styles.table}>
      {data.map((obj, id) => (
        <CountCard
          data={obj.data}
          diff={obj.diff}
          key={id}
          final_class={obj.final_class}
        />
      ))}
    </div>
  );
};

export default CountTicket;
