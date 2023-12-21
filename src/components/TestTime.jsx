import { data } from "./Events/data";

import styles from "./TestTime.module.scss";

export const TestTime = () => {
  const datetime = Array.from({ length: 24 }, (_, hour) => (
    <li key={hour} className={styles.hour}>
      {hour < 10 ? `0${hour}:00` : `${hour}:00`}
    </li>
  ));

  const startEvent = (event) => {
    return new Date(event.startDateTime).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const endEvent = (event) => {
    return new Date(
      new Date(event.startDateTime).getTime() + event.duration * 60 * 1000,
    ).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const start = (event) => {
    if (new Date(event.startDateTime).getHours() === 0) {
      return new Date(event.startDateTime).getHours() + 7;
    } else if (new Date(event.startDateTime).getHours() === 1) {
      return new Date(event.startDateTime).getHours() * 35;
    } else {
      return new Date(event.startDateTime).getHours() * 28 + 7;
    }
  };

  const end = (event) => {
    if (
      new Date(event.startDateTime).getHours() ===
      new Date(
        new Date(event.startDateTime).getTime() + event.duration * 60 * 1000,
      ).getHours()
    ) {
      return (
        new Date(
          new Date(event.startDateTime).getTime() + event.duration * 60 * 1000,
        ).getHours() + 19
      );
    } else if (
      new Date(
        new Date(event.startDateTime).getTime() + event.duration * 60 * 1000,
      ).getHours() > 1
    ) {
      return (
        new Date(
          new Date(event.startDateTime).getTime() + event.duration * 60 * 1000,
        ).getHours() *
          28 -
        new Date(event.startDateTime).getHours() * 28 +
        13
      );
    } else {
      return (
        new Date(
          new Date(event.startDateTime).getTime() + event.duration * 60 * 1000,
        ).getHours() + 30
      );
    }
  };

  const type_1 = data
    .filter((type) => type.type === 1)
    .map((event) => (
      <div
        key={event.id}
        className={styles.event_log1}
        style={{
          top: start(event),
          height: end(event),
        }}>
        <h2 className={styles.title}>{event.title}</h2>
        <p className={styles.time}>
          {startEvent(event)} - {endEvent(event)}
        </p>
      </div>
    ));

  return (
    <div className={styles.container}>
      <div className={styles.log}>
        <div className={styles.log1}>{type_1}</div>
        <div className={styles.log2}></div>
        <div className={styles.log3}></div>
        <div className={styles.log4}></div>
      </div>
      <div className={styles.timeline}>
        <ul className={styles.list}>{datetime}</ul>
      </div>
    </div>
  );
};
