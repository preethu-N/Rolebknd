import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)

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
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Admin Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 pr-10 rounded-lg bg-white/10 border border-white/20 outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white transition-colors"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-semibold transition-colors"
          >
            Login as Admin
          </button>

        </form>

        <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-sm text-gray-300">
          <Link to="/teamlogin" className="hover:text-blue-400 transition-colors">
            Team Leader Login →
          </Link>
          <Link to="/memberlogin" className="hover:text-blue-400 transition-colors">
            Member Login →
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Login