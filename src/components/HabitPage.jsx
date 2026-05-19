import { useState, useEffect } from "react";

import HabitList from "./HabitList";
import Popup from "./Popup";
export default function HabitPage(){
    const [showPopup, setShowPopup] = useState(false);
    
    function openHabitCreationTool(){
        setShowPopup(true)
    }

    return <>

        {showPopup && (
          <Popup/>
        )}
        <section id="center">
            <button onClick={openHabitCreationTool}>Create New</button>
        <div className="habit-list">
          <HabitList />
        </div>
        <div className='profile-side-meny'>

        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
}

