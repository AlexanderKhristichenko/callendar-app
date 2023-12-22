import { Calendar } from "./components/Calendar/Calendar";
import { Events } from "./components/Events/Events";
// import { TestTime } from "./components/TestTime";

import styles from "./App.module.scss";

export const App = () => {
  return (
    <>
      <div className={styles.app}>
        <Events />
        <Calendar />
      </div>
      {/* <TestTime /> */}
    </>
  );
};
