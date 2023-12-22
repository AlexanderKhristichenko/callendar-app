import styles from "./Timeline.module.scss";

export const Timeline = () => {
  const datetime = Array.from({ length: 24 }, (_, hour) => (
    <li key={hour} className={styles.hour}>
      {hour < 10 ? `0${hour}:00` : `${hour}:00`}
    </li>
  ));

  return (
    <div className={styles.timeline}>
      <ul className={styles.list}>{datetime}</ul>
    </div>
  );
};
