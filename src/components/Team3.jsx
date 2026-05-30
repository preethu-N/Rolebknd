import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Team3 = () => {
  const navigate = useNavigate()

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleAddTask = (e) => {
    e.preventDefault()

    if (task.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: task
    }

    setTasks([...tasks, newTask])
    setTask("")
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const handleLogout = () => {
    localStorage.removeItem("role")
    navigate("/login")
  }

  return (
    <div className="min-h-screen  from-teal-900 bg-green-800 via-gray-900 to-black flex items-center justify-center text-white">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl w-[90%] max-w-md shadow-2xl">

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            Team 3 Page
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
          >
            Logout
          </button>
        </div>

        <p className="text-center text-gray-300 mb-6">
          Manage Team 3 tasks here
        </p>

        {/* Add Task */}
        <form onSubmit={handleAddTask} className="flex gap-2 mb-6">

          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            className="flex-1 p-2 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600 px-4 rounded-lg font-semibold"
          >
            Add
          </button>

        </form>

        {/* Task List */}
        <div className="space-y-3">

          {tasks.length === 0 && (
            <p className="text-gray-400 text-center text-sm">
              No tasks yet
            </p>
          )}

          {tasks.map((t) => (
            <div
              key={t.id}
              className="flex justify-between items-center bg-white/10 p-2 rounded-lg"
            >
              <span>{t.text}</span>

              <button
                onClick={() => handleDelete(t.id)}
                className="text-red-400 hover:text-red-600"
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Team3