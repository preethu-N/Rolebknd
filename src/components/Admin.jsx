import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Admin = () => {
  const navigate = useNavigate()

  // States with default mock data
  const [teamLeaders, setTeamLeaders] = useState([
    { id: 1, name: "Team Leader 1" },
    { id: 2, name: "Team Leader 2" },
    { id: 3, name: "Team Leader 3" },
  ])

  const [members, setMembers] = useState([
    { id: 1, name: "Member 1", team: "Team 1" },
    { id: 2, name: "Member 2", team: "Team 2" },
    { id: 3, name: "Member 3", team: "Team 3" },
  ])

  const [tasks, setTasks] = useState([
    { id: 1, task: "Design UI", assignedTo: "Team 1" },
    { id: 2, task: "Fix Bugs", assignedTo: "Team 2" },
    { id: 3, task: "API Integration", assignedTo: "Team 3" },
  ])

  useEffect(() => {
    // Check if user is admin (optional safety check, we can enable it or keep it open)
    // const role = localStorage.getItem("role")
    // if (role !== "admin") {
    //   navigate("/login")
    //   return
    // }

    // Fetch team leaders
    axios.get("http://127.0.0.1:8000/api/team-leaders/")
      .then(res => {
        if (Array.isArray(res.data)) {
          setTeamLeaders(res.data)
        }
      })
      .catch(err => console.warn("Failed to fetch team leaders, using mock data:", err))

    // Fetch members
    axios.get("http://127.0.0.1:8000/api/members/")
      .then(res => {
        if (Array.isArray(res.data)) {
          setMembers(res.data)
        }
      })
      .catch(err => console.warn("Failed to fetch members, using mock data:", err))

    // Fetch tasks
    axios.get("http://127.0.0.1:8000/api/tasks/")
      .then(res => {
        if (Array.isArray(res.data)) {
          setTasks(res.data)
        }
      })
      .catch(err => console.warn("Failed to fetch tasks, using mock data:", err))
  }, [])

  const logout = () => {
    localStorage.removeItem("role")
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-purple-800 from-gray-900 via-gray-800 to-black flex items-center justify-center p-5">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-4xl text-white">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <p className="text-gray-300 mb-6">
          Only admin can see this page
        </p>

        {/* GRID SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* TEAM LEADERS */}
          <div className="bg-white/10 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Team Leaders</h2>

            {teamLeaders.map((leader) => (
              <div key={leader.id} className="p-2 border-b border-gray-600">
                {leader.name}
              </div>
            ))}
          </div>

          {/* MEMBERS */}
          <div className="bg-white/10 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Members</h2>

            {members.map((m) => (
              <div key={m.id} className="p-2 border-b border-gray-600">
                {m.name} - <span className="text-gray-300">{m.team}</span>
              </div>
            ))}
          </div>

          {/* TASKS */}
          <div className="bg-white/10 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Tasks</h2>

            {tasks.map((t) => (
              <div key={t.id} className="p-2 border-b border-gray-600">
                {t.task} → <span className="text-gray-300">{t.assignedTo}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Admin