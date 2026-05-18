import Habit from "./Habit"; 
import { getHabits } from "../api";
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

    return <>
        <h2>{props.title}</h2>
        {habits.map(habit => (
      <Habit key={habit.id} {...habit} />
    ))}
        
    </>
}

export default HabitList;