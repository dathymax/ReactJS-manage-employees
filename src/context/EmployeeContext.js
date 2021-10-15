import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext()

const EmployeeContextProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const retrieveEmployees = async () => {
        const response = await axios.get(`http://localhost:3000/employees`)
        return response.data
    }

    const sortedEmployees = employees.sort((a,b) => (a.lastName < b.lastName ? -1 : 1))

    useEffect(() => {
        axios.get(`http://localhost:3000/employees`).then(res => {
            setEmployees(res.data)
        })
    }, [])

    useEffect(() => {
        const getAllEmployees = async () => {
            const allEmployees = await retrieveEmployees()
            if(allEmployees) setEmployees(allEmployees)
        }
        getAllEmployees()
    }, [])

    useEffect(()=> {
        setEmployees(JSON.parse(localStorage.getItem('employees')))
    },[])
    
    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    })

    const addEmployee = async (firstName, lastName, gender, email, address, phone, role) => {
        const request = 
            {
                id: uuidv4(),
                firstName,
                lastName,
                gender,
                email,
                address,
                phone,
                role,
            }
        const response = await axios.post(`http://localhost:3000/employees`, request)
        setEmployees(
            [...employees, response.data]
        )
    }

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:3000/employees/${id}`)
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    const updateEmployee = async (id, updatedEmployee) => {
        await axios.put(`http://localhost:3000/employees/${updatedEmployee.id}`, updatedEmployee)
        setEmployees(employees.map((employee) => employee.id === id ? updatedEmployee : employee))
    }

    return (
        <div>
            <EmployeeContext.Provider  
                value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}
            >
                {props.children}
            </EmployeeContext.Provider>
        </div>
    )
}

export default EmployeeContextProvider
