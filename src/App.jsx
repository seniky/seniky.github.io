function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">My Portfolio</h1>
      <div className="space-y-4">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-2xl font-semibold">Project Title</h2>
          <p className="text-gray-700">Brief project description goes here.</p>
          <a href="https://github.com/yourusername/project" className="text-blue-500 underline">View on GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default App
