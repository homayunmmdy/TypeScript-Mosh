import { useEffect, useState } from "react";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";
import ReminderService from "./services/reminder";

const App = () => {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminders) => reminders.id !== id));
  };

  return (
    <>
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </>
  );
};

export default App;
