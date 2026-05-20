function Habit(props){
    return <>
    <article className="habit-card">
      <div className="habit-card-top">
        <h3 className="habit-card-title">{props.name}</h3>
        <span className="habit-card-badge">{props.points} pts</span>
      </div>
      <div className="habit-card-details">
        <div className="habit-card-row">
          <span className="habit-card-label">Days to master</span>
          <span>{props.daysToMaster}</span>
        </div>
        <div className="habit-card-row">
          <span className="habit-card-label">Created</span>
          <span>{props.creationDate}</span>
        </div>
      </div>
    </article>
    </>
}

export default Habit;
