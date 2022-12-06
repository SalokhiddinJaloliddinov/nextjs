import React from "react";

import styles from "./Count.module.scss";
import { ArrowDropdownIcon } from "src/components/icons";

import { TicketClasses } from "src/utils/types";
import { getCountIcon } from "src/utils/scripts";

interface CountCardType {
  data: string | number;
  diff: string | number;
  final_class: TicketClasses | string;
}

const CountCard: React.FC<CountCardType> = ({ data, diff, final_class }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__row}>
        <div className={styles.card__main}>
          <h6>{final_class}</h6>
          <div className={styles.stats}>
            <h4>{data}</h4>
            <p className={styles.diff}>
              Last week
              <ArrowDropdownIcon size={12} />
              <span className={styles.diff__data}>{diff}</span>
            </p>
          </div>
        </div>
        <div className={styles.card__secondary}>
          {getCountIcon(final_class)}
          {/*<MailIcon size={30} color={variables.whiteColor} />*/}
        </div>
      </div>
    </div>
  );
};

export default CountCard;
