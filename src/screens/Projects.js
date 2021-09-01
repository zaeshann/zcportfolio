import React from 'react'
import ProjectPost from '../components/ProjectPost'
import netflix from '../images/netflix.png'
function Projects() {
    return (
        <div className="flex flex-col pt-24  lg:pt-12 w-full flex px-24 lg:px-2 mb-24 lg:mb-0 lg:mt-14 items-center justify-center">
            <h1 className="titlee text-3xl font-bold mb-2 ">Recent Projects</h1>
            <ProjectPost title={"Netflix Clone"} des={"Created a netflix Clone Using React JS"} img={netflix} lnk={"https://netflix-clone-40fa5.web.app/"} />
            <ProjectPost title={"Netflix Clone"} des={"Created a netflix Clone Using React JS"} img={netflix} lnk={"https://netflix-clone-40fa5.web.app/"} />

        </div>
    )
}

export default Projects
