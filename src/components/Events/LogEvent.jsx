import styles from "./LogEvent.module.scss";

export const LogEvent = ({ startDateTime, duration, type, title }) => {
  const startEvent = () => {
    return new Date(startDateTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const endEvent = () => {
    return new Date(
      new Date(startDateTime).getTime() + duration * 60 * 1000,
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const start = () => {
    if (new Date(startDateTime).getHours() === 0) {
      return new Date(startDateTime).getHours() + 7;
    } else if (new Date(startDateTime).getHours() === 1) {
      return new Date(startDateTime).getHours() * 35;
    } else {
      return new Date(startDateTime).getHours() * 28 + 13;
    }
  };

  const end = () => {
    let timeStart = new Date(startDateTime).getHours();
    let timeEnd = new Date(
      new Date(startDateTime).getTime() + duration * 60 * 1000,
    ).getHours();

    if (timeStart === timeEnd) return (timeEnd = 30);
    if (timeStart !== timeEnd) return timeEnd * 28 - timeStart * 28 + 15;
  };

  const eventClass = () => {
    if (type === 1) return styles.event_log1;
    if (type === 2) return styles.event_log2;
    if (type === 3) return styles.event_log3;
    if (type === 4) return styles.event_log4;
  };

  return (
    <div
      className={`${styles.event_log} ${eventClass()}`}
      style={{
        top: start(),
        height: end(),
      }}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.time}>
        {startEvent()} - {endEvent()}
      </p>
    </div>
  );
};
