import "./Popup.css";
import { useState } from "react";
import createHabit from "../api/createHabit";

//  Integer points, LocalDate creationDate, Integer unlockCost, HabitStatus status,
//                        Integer daysToMaster,Integer remainingDays)

export default function Popup({ onClose }) {
    const [formData, setFormData] = useState({
        habitName:"",
        description:"",
        points:"",
        unlockCost: "",
        daysToMaster:""
    });
    const handleChange = (e) => {
        const { id, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-window" onClick={(event) => event.stopPropagation()}>
        <h2 className="popup-title">New Task</h2>
        <form className="popup-form">
            <input className="popup-input" type="text" id="habitName" value={formData.habitName} onChange={handleChange} placeholder="Habit name" />
            <input className="popup-input" type="text" id="description" value={formData.description} onChange={handleChange} placeholder="Description" />
            <label htmlFor="points">Points Per Execution</label><input className="popup-input" id="points" type="number" value={formData.points} onChange={handleChange} placeholder="0" />
            <label htmlFor="unlockCost">Unlock Cost</label><input className="popup-input" id="unlockCost" type="number" value={formData.unlockCost} onChange={handleChange} placeholder="0" />
            <label htmlFor="daysToMaster">Days To Master</label><input className="popup-input" id="daysToMaster" type="number" value={formData.daysToMaster} onChange={handleChange} placeholder="1" />

        </form>
        <button className="popup-button popup-button-primary" type="button" onClick={() => {
            createHabit(formData)}
            }>
          Create
        </button>
        <button className="popup-button popup-button-secondary" type="button" onClick={onClose}>
          Close
        </button>


      </div>
    </div>
  );
}
