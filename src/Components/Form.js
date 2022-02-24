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
        <form>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
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
            </label>
            <label>

                Create a password
                <input
                    name='password'
                    type='password'
                    value={values.password}
                    placeholder='Must be at least 4 characters long'
                    onChange={onChange}
                />
            </label>
            <label id='radio'>
                I accept the Terms of Use
                <input
                    id='choice'
                    name='tos'
                    type='radio'
                    value='accept'
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
                    value='decline'
                    onChange={onChange}
                    checked={values.tos === 'I am disinclined to acquiesce'}
                />
            </label>
            <button>Submit</button>
        </form>
    );
}
