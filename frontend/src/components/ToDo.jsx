import '../styles/toDo.css'
import Task from '../components/Task'

function ToDo(){
    return(
        <div className='to-do-cont'>
            <h1 className='to-do-header'>To-Do</h1>
            <div className='task-input-cont'>
                <input type="text" className='task-input-box' placeholder='Enter your task'/>
                <button className='task-submit-button'>Add</button>
            </div>
            <div className='task-holder'>
                <Task title={"Go buy milk"} checked={true}></Task>
                <Task title={"Make bed"} checked={false}></Task>
                <Task title={"Rake the leaves"} checked={true}></Task>
                <Task title={"Go for a run"} checked={true}></Task>
            </div>
        </div>
    );
}

export default ToDo;