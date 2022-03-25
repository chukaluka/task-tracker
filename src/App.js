import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Football Match',
      day: 'March 17th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Coding seminar',
      day: 'March 28th at 9:00am',
      reminder: true,
    },
    {
      id: 3,
      text: 'Singing Competition',
      day: 'April 1st at 8:00pm',
      reminder: false, 
    },
  ])

  //Add Task
  const addTask = (task) => {
   const id = Math.floor(Math.random()* 10000) + 1
   const  newTask ={ id, ...task } 
   setTasks([...tasks, newTask])

  }

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id)) 
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task ))
}

  return (
    <div className='container'>
     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
     {showAddTask && <AddTask onAdd={addTask} />}
     { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> ) :( 'No more tasks')}
    </div>
  )
}

export default App;
  