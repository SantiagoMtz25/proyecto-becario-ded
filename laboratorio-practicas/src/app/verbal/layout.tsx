import Footer from '../components/Footer'
import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import subjects from "./verbalSubjects.json"

const layout = ({ children }: { children: React.ReactNode }) => { 
  const verbalSubjects = subjects.map((subject) => subject.title)

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
        <div className="flex flex-row gap-4 w-full lg:max-w-[1120px] self-center px-2 mb-16">
          <SideBar elements={verbalSubjects} />
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default layout