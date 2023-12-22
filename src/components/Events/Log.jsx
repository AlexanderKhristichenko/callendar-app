import { data } from "./data";
import { LogEvent } from "./LogEvent";

import styles from "./Log.module.scss";

export const Log = () => {
  const logEvent = data.map((event) => (
    <LogEvent
      key={event.id}
      startDateTime={event.startDateTime}
      duration={event.duration}
      type={event.type}
      title={event.title}
    />
  ));

  return <div className={styles.log}>{logEvent}</div>;
};
