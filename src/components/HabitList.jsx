import Habit from "./Habit"; 
import { getHabits } from "../api/api";
import { useState, useEffect } from "react";




function HabitList(props){
    const [habits, setHabits] = useState([]);

useEffect(() => {
  console.log("useEffect works");

  async function loadHabitIntoList() {
    console.log("loading habits");

    try {
      const values = await getHabits();

      console.log("response:", values);

      setHabits(values);
    } catch (error) {
      console.error(error);
    }
  }

  loadHabitIntoList();
}, []);

    return <section className="habit-list-panel">
        <div className="habit-list-header">
          <h2>{props.title}</h2>
        </div>
        <div className="habit-list-grid">
        {habits.map(habit => (
      <Habit key={habit.id} {...habit} />
    ))}
        </div>
    </section>
}

export default HabitList;
