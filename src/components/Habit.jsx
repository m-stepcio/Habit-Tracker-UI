function Habit(props){
    return <>
    <h3>{props.name}</h3>
    <div>Reward point: {props.points}</div>
    <div>Days to master: {props.daysToMaster}</div>
    <div>Creation date: {props.creationDate}</div>
    </>
}

export default Habit;