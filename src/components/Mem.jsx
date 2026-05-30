



const Mem = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-800">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl w-[90%] max-w-md text-center text-white">

        <h1 className="text-3xl font-bold mb-3">
          Member Dashboard
        </h1>

        <p className="text-gray-300 mb-6">
          Only member can see this page
        </p>

        <div className="bg-white/10 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-200">Welcome Member 👤</p>
          <p className="text-xs text-gray-400">
            You have limited access
          </p>
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 transition py-2 rounded-lg font-semibold shadow-lg">
          View Tasks
        </button>

      </div>

    </div>
  )
}

export default Mem