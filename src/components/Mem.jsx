import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Mem = () => {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])
  const [showTasks, setShowTasks] = useState(false)

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

  const handleLogout = () => {
    localStorage.removeItem("role")
    navigate("/login")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-800 text-white p-5">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            Member Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm font-semibold"
          >
            Logout
          </button>
        </div>

        <p className="text-gray-300 mb-6">
          Only member can see this page
        </p>

        <div className="bg-white/10 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-200">Welcome Member 👤 (Team 1)</p>
          <p className="text-xs text-gray-400">
            You have limited access
          </p>
        </div>

        <button 
          onClick={() => setShowTasks(!showTasks)}
          className="w-full bg-green-500 hover:bg-green-600 transition py-2 rounded-lg font-semibold shadow-lg"
        >
          {showTasks ? "Hide Tasks" : "View Tasks"}
        </button>

        {showTasks && (
          <div className="mt-6 text-left max-h-60 overflow-y-auto space-y-2">
            <h3 className="font-semibold text-lg border-b border-white/20 pb-1 mb-2">Assigned Tasks</h3>
            {tasks.length === 0 ? (
              <p className="text-sm text-gray-300 text-center">No tasks assigned yet</p>
            ) : (
              tasks.map(t => (
                <div key={t.id} className="bg-white/10 p-2 rounded-lg text-sm border-l-4 border-green-500">
                  {t.task}
                </div>
              ))
            )}
          </div>
        )}

      </div>

    </div>
  )
}

export default Mem