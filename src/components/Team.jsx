import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Team = () => {
  const navigate = useNavigate()

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/tasks/")
      if (Array.isArray(res.data)) {
        const filtered = res.data.filter(t => t.assignedTo === "Team 1")
        setTasks(filtered)
      }
    } catch (err) {
      console.warn("Failed to fetch tasks from server:", err)
    }
  }

  const handleAddTask = async (e) => {
    e.preventDefault()

    if (task.trim() === "") return

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/tasks/", {
        task: task,
        assignedTo: "Team 1"
      })
      if (res.data) {
        setTasks([...tasks, res.data])
        setTask("")
      }
    } catch (err) {
      console.error("Failed to add task to server:", err)
      alert("Failed to add task")
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}/`)
      setTasks(tasks.filter(t => t.id !== id))
    } catch (err) {
      console.error("Failed to delete task from server:", err)
      alert("Failed to delete task")
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("role")
    navigate("/login")
  }

  return (
    <div className="min-h-screen  from-gray-900 via-blue-900 bg-green-800 to-black flex items-center justify-center text-white">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl w-[90%] max-w-md shadow-2xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">

          <div>
            <h1 className="text-2xl font-bold">
              Team Page
            </h1>
            <p className="text-sm text-gray-300">
              Manage your team tasks here
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
          >
            Logout
          </button>

        </div>

        {/* Add Task Form */}
        <form onSubmit={handleAddTask} className="flex gap-2 mb-6">

          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter new task"
            className="flex-1 p-2 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-4 rounded-lg font-semibold"
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
              <span>{t.task}</span>

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

export default Team