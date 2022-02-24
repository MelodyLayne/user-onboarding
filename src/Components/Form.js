import React from 'react';
import './form.css';

export default function Form(props) {
    const {values, submit, change, errors } = props;

    const onSubmit = e => {
      e.preventDefault();
      submit()
    }

    const onChange = e => {
        const { name, value, type,  } = e.target;
        change(name, value)
    };

    return (
        <form onSubmit={onSubmit}>
            Building stuff
            <label>
                Please Enter a Name
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    placeholder='Hector Barbossa'
                />
                <div>{errors.name}</div>
            </label>
            <label>
                Please Enter an email address
                <input
                    name='email'
                    type='email'
                    value={values.email}
                    placeholder='Yar1863@highseas.com'
                    onChange={onChange}
                />
                <div>{errors.email}</div>
            </label>
            <label>
                Create a password
                <input
                    name='password'
                    type='password'
                    value={values.password}
                    onChange={onChange}
                />
                <div>{errors.password}</div>
            </label>
            <label id='radio'>
                I accept the Terms of Use
                <input
                    id='choice'
                    name='tos'
                    type='radio'
                    value='I accept the Terms of Use'
                    onChange={onChange}
                    checked={values.tos === 'I accept the Terms of Use'}
                />
            </label>
            <label id='radio'>
                I am disinclined to acquiesce
                <input
                    id='choice'
                    name='tos'
                    type='radio'
                    value='I am disinclined to acquiesce'
                    onChange={onChange}
                    checked={values.tos === 'I am disinclined to acquiesce'}
                />
            </label>
            <div>{errors.tos}</div>
            <button>Submit</button>
        </form>
    );
}
