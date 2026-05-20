import { useState } from "react";

import HabitList from "./HabitList";
import Popup from "./Popup";
export default function HabitPage(){
    const [showPopup, setShowPopup] = useState(false);
    
    function openHabitCreationTool(){
        setShowPopup(true)
    }

    return <>

        {showPopup && (
          <Popup onClose={() => setShowPopup(false)} />
        )}
        <section id="center" className="habit-page">
          <div className="habit-page-header">
            <div className="habit-page-copy">
              <p className="habit-page-eyebrow">Habit Tracker</p>
              <h1 className="habit-page-title">Your habits</h1>
              <p className="habit-page-subtitle">Keep routines visible, simple, and easy to review.</p>
            </div>
            <button className="create-habit-button" onClick={openHabitCreationTool}>Create New</button>
          </div>
        <div className="habit-list">
          <HabitList title="Active habits" />
        </div>
        <div className='profile-side-meny'>

        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
}
