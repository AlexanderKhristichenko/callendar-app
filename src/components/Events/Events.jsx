import { Log } from "./Log";
import { Timeline } from "./Timeline";

import styles from "./Events.module.scss";

export const Events = () => {
  return (
    <div className={styles.container}>
      <Log />
      <Timeline />
    </div>
  );
};
