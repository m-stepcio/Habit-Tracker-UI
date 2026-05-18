import Habit from "./Habit"; 
import { getHabits } from "../api";
import { useState } from "react";




function HabitList(props){
    const [habits, setHabits] = useState([]);

    function loadHabitIntoList(){
      const values = getHabits();
      setHabits(values);
    }     

    loadHabitIntoList();
    return <>
        <h2>{props.title}</h2>
        {habits.map(habit => (
      <Habit key={habit.id} {...habit} />
    ))}
        
    </>
}

export default HabitList;