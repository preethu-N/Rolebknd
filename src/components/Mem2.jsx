

const Mem2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-800 from-indigo-900 via-gray-900 to-black">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-2xl shadow-2xl w-[90%] max-w-md text-center text-white">

        <h1 className="text-3xl font-bold mb-3">
          Member 2 Dashboard
        </h1>

        <p className="text-gray-300 mb-6">
          Only Member 2 can see this page
        </p>

        <div className="bg-white/10 p-4 rounded-lg mb-6">
          <p className="text-sm text-gray-200">Welcome Member 2 👋</p>
          <p className="text-xs text-gray-400">
            You have restricted access
          </p>
        </div>

        <button className="w-full bg-purple-500 hover:bg-purple-600 transition py-2 rounded-lg font-semibold shadow-lg">
          Open Dashboard
        </button>

      </div>

    </div>
  )
}

export default Mem2