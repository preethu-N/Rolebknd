import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MemberLogin = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  // 🔐 SECRET USERS (later backend replace cheyyam)
  const users = [
    { username: "admin", password: "admin123", role: "admin" },

    { username: "team1_user", password: "t1pass", role: "team1" },
    { username: "team2_user", password: "t2pass", role: "team2" },
    { username: "team3_user", password: "t3pass", role: "team3" },

    { username: "mem1", password: "m1pass", role: "mem" },
    { username: "mem2", password: "m2pass", role: "mem2" },
    { username: "mem3", password: "m3pass", role: "mem3" },
  ]

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("http://127.0.0.1:8000/api/member-login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(form)
      })

      const data = await res.json()

      if (data.status === "success") {
        localStorage.setItem("role", data.role)
        navigate(`/${data.role}`)
      } else {
        alert("Invalid credentials")
      }

    } catch (error) {
      console.error("Login error:", error)
      alert("Server error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center  from-gray-900 via-purple-900 to-black">

      <div className="bg-green-900 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Secure Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default MemberLogin