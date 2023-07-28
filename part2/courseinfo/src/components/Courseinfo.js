import React from 'react'

const Courseinfo = (props) => {
    return (
        <div>
            {props.info.map( element => {
                return (
                    <div key={element.id}>
                        <div>{element.name} {element.exercises}</div>
                    </div>
                )
            })}
        </div>
    )
}

export { Courseinfo }