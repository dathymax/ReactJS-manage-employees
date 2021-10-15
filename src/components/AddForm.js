import React from 'react'
import { useContext, useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext';
import { Button, Form, InputGroup } from 'react-bootstrap';

const AddForm = () => {
    const {addEmployee} = useContext(EmployeeContext)

    const [newEmployee, setNewEmployee] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        address: '',
        phone: '',
        role: '',
    })

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const {firstName, lastName, gender, email, address, phone, role} = newEmployee

    const handleSubmit = (e) => {
        e.preventDefault()
        addEmployee(firstName, lastName, gender, email, address, phone, role)

        setNewEmployee({
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            address: '',
            phone: '',
            role: '',
        })
    }

    return (
        <Form action="" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        First name : 
                    </InputGroup.Text>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your  name" 
                        name="firstName"
                        value={firstName}
                        onChange={e => onInputChange(e)}
                        required
                    />  
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Last name : 
                    </InputGroup.Text>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your name" 
                        name="lastName"
                        value={lastName}
                        onChange={e => onInputChange(e)}
                        required
                    />  
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Gender : 
                    </InputGroup.Text>
                    <Form.Select 
                        onChange={e => onInputChange(e)} 
                        name="gender"
                        required
                    >
                        <option value="" selected hidden disabled>Choose your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Email : 
                    </InputGroup.Text>
                    <Form.Control  
                        type="email"
                        placeholder="Enter your email" 
                        name="email"
                        value={email}
                        onChange={e => onInputChange(e)}
                        required
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Address : 
                    </InputGroup.Text>
                    <Form.Control  
                        type="text"  
                        placeholder="Enter your address" 
                        name="address"
                        value={address}
                        onChange={e => onInputChange(e)}
                        required
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Phone : 
                    </InputGroup.Text>
                    <Form.Control  
                        type="text" 
                        placeholder="Enter your phone number"
                        name="phone"
                        value={phone}
                        onChange={e => onInputChange(e)}
                        required
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Role : 
                    </InputGroup.Text>
                    <Form.Control  
                        type="text" 
                        placeholder="Enter your role" 
                        name="role"
                        value={role}
                        onChange={e => onInputChange(e)}
                        required
                    />
                </InputGroup>
            </Form.Group>
            <Button type="submit">Add new employee</Button>
        </Form>
    )
}

export default AddForm
