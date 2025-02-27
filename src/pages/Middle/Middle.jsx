import React from 'react'

const Middle = () => {
  return (
    <main className="w-full sm:w-[70%] sm:overflow-y-auto mb-6 sm:mb-0 p-6 h-screen">
        <section className="mb-8">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="text-gray-700">Write about yourself here...</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            {/* Add more skills */}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-4 space-y-4">
            <div className="p-4 border rounded-lg shadow">
              <h3 className="font-semibold">Project 1</h3>
              <p className="text-gray-600">Project description...</p>
            </div>
            {/* Add more projects */}
          </div>
        </section>
    </main>
  )
}

export default Middle