import Reminder from "../models/Reminder";

interface ReminderListProps {
  items: Reminder[];
}

const ReminderList = ({ items }: ReminderListProps) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default ReminderList;
