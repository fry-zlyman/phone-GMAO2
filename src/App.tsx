
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">GMAO Solutions - Project Manager</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Project 1</h2>
            <button onClick={() => setCount(c => c + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Count: {count}
            </button>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Project 2</h2>
            <div className="h-32 flex items-center justify-center">
              Coming Soon
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Project 3</h2>
            <div className="h-32 flex items-center justify-center">
              Coming Soon
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
