type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Homayoun",
  retire: (date: Date) => {
    console.log(date);
  },
};