import React from 'react'
import SkillList from './SkillList'

function Skills() {
    return (
        <div id='skills' className='px-6 lg:px-8 py-10'>
            <div className='max-w-7xl text-center'>
                <h2 className='text-4xl font-bold tracking-tight text-black py-4'>
                    Take a look at my Skills.
                </h2>
                {/* <p className='mt-6 max-w-7xl py-4 text-lg leading-8 text-gray-600 font-medium text-center'>These lists all the technologies and programming languages I have acquired knowledge in until present and I am continuously expanding my knowledge and thus, this section may be updated frequently.</p> */}
            </div>
            <SkillList />
        </div>
    )
}

export default Skills
