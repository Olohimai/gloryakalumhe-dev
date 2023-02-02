import React from 'react'
import SkillList from './SkillList'

function Skills() {
    return (
        <div id='skills' className='px-6 lg:px-8 py-10'>
            <div className='mx-auto max-w-2xl text-center'>
                <h2 className='text-4xl font-bold tracking-tight text-black'>
                    Take a look at my Skills.
                </h2>
                <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 font-medium'>This lists all the technologies and programming languages I have acquired knowledge in until present and I am continuously expanding my knowledge and thus, this section may be updated frequently.</p>
            </div>
            <SkillList />
        </div>
    )
}

export default Skills
