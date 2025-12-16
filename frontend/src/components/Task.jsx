import '../styles/task.css'
import { useState } from 'react';

function Task( { title, checked } ){
    const [isChecked, setChecked] = useState(checked);

    return(
        <div className='task-cont'>
            <button onClick={() => setChecked(!isChecked)} className={`check-task-button ${isChecked ? "checked-button": ""}`}>{isChecked ? "✔": ""}</button>
            <h2 className={`task-title ${isChecked ? "checked-title": ""}`}>{title}</h2>
            <button className='delete-task-button'>✖</button>
            
        </div>
    )
}

export default Task;