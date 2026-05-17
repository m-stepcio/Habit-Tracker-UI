import Habit from "./Habit"; 

function HabitList(props){
    const habits = [
  {
    id: 1,
    name: "Read 30 minutes",
    points: 10,
    creationDate: "2026-05-17",
    unlockCost: 50,
    status: "INACTIVE",
    daysToMaster: 21,
    remainingDays: 21
  },
  {
    id: 2,
    name: "Morning Workout",
    points: 20,
    creationDate: "2026-05-16",
    unlockCost: 75,
    status: "ACTIVE",
    daysToMaster: 30,
    remainingDays: 12
  },
  {
    id: 3,
    name: "Drink 2L Water",
    points: 5,
    creationDate: "2026-05-15",
    unlockCost: 25,
    status: "MASTERED",
    daysToMaster: 14,
    remainingDays: 0
  },
  {
    id: 4,
    name: "Study React",
    points: 15,
    creationDate: "2026-05-14",
    unlockCost: 60,
    status: "ACTIVE",
    daysToMaster: 45,
    remainingDays: 20
  },
  {
    id: 5,
    name: "Meditate",
    points: 8,
    creationDate: "2026-05-13",
    unlockCost: 40,
    status: "INACTIVE",
    daysToMaster: 10,
    remainingDays: 10
  }
]
    return <>
        <h2>{props.title}</h2>
        {habits.map(habit => (
      <Habit key={habit.id} {...habit} />
    ))}
        
    </>
}

export default HabitList;