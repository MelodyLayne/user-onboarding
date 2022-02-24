import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    tos: '',
};

const initialErrors = {
    name: '',
    email: '',
    password: '',
    tos: '',
};

const initialUsers = [];

function App() {
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialErrors);

    const getUsers = () => {
        axios
            .get(`https://reqres.in/api/users`)
            .then((res) => {
                console.log('first run' + res.data);
                setUsers(res.data);
                console.log(setUsers(res.data))
            })
            .catch((err) => console.error(err));
    };

    const postNewUser = (newUser) => {
        axios
            .post(`https://reqres.in/api/users`, newUser)
            .then((res) => {
                console.log(res.data + 'running');
                setUsers([...users, res.data]);
                setFormValues(initialFormValues);
            })
            .catch((err) => console.error(err));
    };

    const validate = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
    };

    const inputChange = (name, value) => {
      validate(name, value);
      setFormValues({
        ...formValues,
        [name]: value
      })
    }

    const formSubmit = () => {
        const newUser = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            tos: formValues.name,
        };

        postNewUser(newUser);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='App'>
            <Form
            values={formValues}
            errors={errors}
            submit={formSubmit}
            change={inputChange}
            />
        </div>
    );
}
export default App;
