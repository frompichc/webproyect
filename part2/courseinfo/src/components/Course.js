import React from 'react'
import { Tittle } from './Tittle'
import { Courseinfo } from './Courseinfo'

const Course = ({course}) => {
    return (
        <div>
            {course.map(courses => {
                const total = courses.parts.reduce((total, amount) => total +  amount.exercises,0);
                return (
                    <div key={courses.id}>
                        <Tittle name={courses.name}/>
                        <Courseinfo info={courses.parts}/>
                        <h4>Total: {total}</h4>
                    </div>
                )})
            }
        </div>
    )
}

export {Course}