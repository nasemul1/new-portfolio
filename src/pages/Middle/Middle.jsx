import React from 'react'
import Introduction from '../../components/Introduction'
import About from '../../components/About'

const Middle = () => {
  return (
    <main className="w-full sm:w-[65%] sm:overflow-y-auto scrollbar-hide scroll-smooth mb-6 p-5 sm:px-8 sm:py-10 sm:mb-0 max-h-screen">

        <Introduction />
        <About />

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