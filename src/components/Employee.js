import React, { Fragment, useEffect, useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'
import { useContext } from 'react'
import EditForm from './EditForm'
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Employee = ({employee}) => {
    const {deleteEmployee} = useContext(EmployeeContext)

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose= () => setShow(false)

    useEffect(() => {
        handleClose()
    }, [employee])

    return (
        <Fragment key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.gender}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>{employee.role}</td>
            <td>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={'tooltip-top'}>
                            Edit
                        </Tooltip>
                    }
                >
                    <Button 
                        className="dp-inline"
                        variant="warning"
                        onClick={handleShow}>
                        <i className="material-icons">&#xE254;</i>
                    </Button>
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={
                        <Tooltip id={'tooltip-top'}>
                            Delete
                        </Tooltip>
                    }
                >
                    <Button 
                    className="dp-inline"
                    variant="danger"
                    onClick={() => deleteEmployee(employee.id)}>
                    <i className="material-icons">&#xE872;</i>
                </Button>
                </OverlayTrigger>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditForm theEmployee={employee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        onClick={handleClose}
                        variant="secondary"
                    >Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default Employee
