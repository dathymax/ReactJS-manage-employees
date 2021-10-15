import { Button, Form, InputGroup } from 'react-bootstrap';
import React from 'react'
import { useContext, useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext';

const EditForm = ({theEmployee}) => {  
    const id = theEmployee.id

    const [firstName, setfirstName] = useState(theEmployee.firstName)
    const [lastName, setlastName] = useState(theEmployee.lastName)
    const [gender, setGender] = useState(theEmployee.gender)
    const [email, setEmail] = useState(theEmployee.email)
    const [address, setAddress] = useState(theEmployee.address)
    const [phone, setPhone] = useState(theEmployee.phone)
    const [role, setRole] = useState(theEmployee.role)

    const {updateEmployee} = useContext(EmployeeContext)

    const updatedEmployee = {id, firstName, lastName, gender, email, address, phone, role}

    const handleSubmit = (e) => {
        e.preventDefault()
        updateEmployee(id, updatedEmployee)
    }

    return (
        <Form action="" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        First Name :
                    </InputGroup.Text>
                    <Form.Control 
                        type="text" 
                        placeholder="Name" 
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)}
                        required
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Last Name :
                    </InputGroup.Text>
                    <Form.Control 
                        type="text" 
                        placeholder="Name" 
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)}
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
                        onChange={(e) => setGender(e.target.value)}  
                        name="gender"
                        defaultValue={gender}
                        required
                    >
                        <option value="" selected disabled hidden>Choose your gender</option>
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
                        placeholder="Email" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        placeholder="Address" 
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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
                        placeholder="Phone" 
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                        placeholder="Role" 
                        name="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    />
                </InputGroup>
            </Form.Group>
            <Button type="submit">Edit employee</Button>
        </Form>
    )
}

export default EditForm
