

const Mem3 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-800 from-teal-900 via-gray-900 to-black">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl w-[90%] max-w-md text-center text-white">

        <h1 className="text-3xl font-bold mb-3">
          Member 3 Dashboard
        </h1>

        <p className="text-gray-300 mb-6">
          Only Member 3 can see this page
        </p>

        <div className="bg-white/10 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-200">Welcome Member 3 👤</p>
          <p className="text-xs text-gray-400">
            Limited access granted
          </p>
        </div>

        <button className="w-full bg-teal-500 hover:bg-teal-600 transition py-2 rounded-lg font-semibold shadow-lg">
          Go to Tasks
        </button>

      </div>

    </div>
  )
}

export default Mem3