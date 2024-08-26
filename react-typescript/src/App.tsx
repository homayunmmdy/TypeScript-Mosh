import { useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Reminder 1" },
  ]);
  return (
    <>
      <ReminderList items={reminders} />
    </>
  );
};

export default App;
