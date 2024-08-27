import express from "express";
import reminders from "./routers/reminders";

const app = express();

app.use("/reminders", reminders);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen("8000", () => console.log("Server startedd"));
