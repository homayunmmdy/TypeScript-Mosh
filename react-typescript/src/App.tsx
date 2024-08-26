import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";

const reminders: Reminder[] = [{ id: 1, title: "Reminder 1" }];
const App = () => {
  return (
    <>
      <ReminderList items={reminders} />
    </>
  );
};

export default App;
