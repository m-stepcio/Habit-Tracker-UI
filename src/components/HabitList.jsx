import Habit from "./Habit"; 


function HabitList(props){

    return <section className="habit-list-panel">
        <div className="habit-list-header">
          <h2>{props.title}</h2>
        </div>
        <div className="habit-list-grid">
        {props.habits.map(habit => (
      <Habit key={habit.id} {...habit} />
    ))}
        </div>
    </section>
}

export default HabitList;
