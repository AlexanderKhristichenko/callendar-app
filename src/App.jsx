import { Calendar } from "./components/Calendar/Calendar";
import { Events } from "./components/Events/Events";
import { TestTime } from "./components/TestTime";

export const App = () => {
  return (
    <>
      <div className="demo-app">
        <Events />
        <Calendar />
      </div>
      <TestTime />
    </>
  );
};
