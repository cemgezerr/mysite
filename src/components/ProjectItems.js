import React from 'react'

const ProjectItems = ({ image, name }) => {
    return (
        <div className='projectItem'>
            <div className='picture'>
                <img src={image} />
            </div>
            <h2>{name}</h2>
        </div>
    )
}

export default ProjectItems