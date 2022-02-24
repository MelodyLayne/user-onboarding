import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: '',
}

const initialErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}

const initialUsers = []

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialErrors)

  const formSubmit = () => {

  }


  return (
    <div className="App">
      <Form
      values={formValues}
      submit={formSubmit}
      />
    </div>
  );
}
export default App;
