import './App.css';
import React from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeContextProvider from './context/EmployeeContext';

const App = () => {
    return (
        <div>
            <EmployeeContextProvider>
                <EmployeeList/> 
            </EmployeeContextProvider>
        </div>
    );
}

export default App;
