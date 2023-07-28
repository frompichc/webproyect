import React, { useEffect, useState } from 'react'
import personService from '../services/persons'


const Persons = ( {persons, newFilter, setPersons, setNotification, setClassDiv} ) => {
    
    // delete information from database
    const DelPerson = (element) => {
        const message = `Delete ${element.name}`
        if (window.confirm(message)) {
            personService.delete(element.id).
            catch (error => {
                setClassDiv('error')
                setNotification(element.name + ' was already removed from the server')
                setTimeout(() => {
                    setNotification(null)
                },5000)
            })
            personService.getAll().then(response => setPersons(response.filter(person => person.id !== element.id)))
            setClassDiv('notification')
            setNotification(element.name + ' has been removed')
            setTimeout(() => {
                setNotification(null)
            }, 5000)   
        }
    }
    
    return (
        <div>
            <table>
                <tbody>
                    {persons.map((element, index) => {
                        if (element.name.search(newFilter) !== -1 || element.name.length === 0) {
                            return (<tr key={index}>
                                <td>{element.name}</td>
                                <td>{element.number}</td>
                                <td><button onClick={() => DelPerson(element)}>Delete</button></td>
                            </tr>)
                        }
                        else return null
                    })}
                </tbody>
            </table>
        </div>
    )
}

export { Persons }