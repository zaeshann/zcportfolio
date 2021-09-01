import React from 'react'

function ProjectPost({ title, des, img, lnk }) {
    return (
        <div className=" w-full flex flex-col py-8 items-center">
            <a href={lnk}>
                <div className="border_container rounded-3xl flex flex-col
                 transform transition duration-300 hover:scale-110  items-center py-4 bg-gray-700">
                    <div className="text-yellow-400 text-2xl mb-2">{title}</div>
                    <p className="font-medium mb-2">{des}</p>
                    <div className="img_container w-3/4  flex items-center  justify-center">
                        <img className="object-cover h-96 w-full   " src={img} alt="image" />
                    </div>

                </div>
            </a>
        </div>
    )
}

export default ProjectPost
