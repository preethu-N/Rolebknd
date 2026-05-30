import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // ✅ UPDATED BACKEND LOGIN FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(form)
      })

      const data = await res.json()

      if (data.status === "success" && data.role === "admin") {
        localStorage.setItem("role", data.role)
        navigate("/admin")
      } else {
        alert("Invalid credentials")
      }

    } catch (error) {
      console.error("Login error:", error)
      alert("Server error")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">

      <div className="bg-green-800 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-white">

        <h1 className="text-3xl font-bold text-center mb-6">
          Admin Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="username"
            placeholder="Admin Username"
            value={form.username}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20"
          />

          <input
            type="password"
            name="password"
            placeholder="Admin Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-semibold"
          >
            Login as Admin
          </button>

        </form>

      </div>
    </div>
  )
}

export default Login