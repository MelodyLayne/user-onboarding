import React from 'react';
import './form.css';

export default function Form(props) {
    const { name, values, submit } = props;

    const onSubmit = (e) => {
      e.preventDefault();
      submit()
    }

    const onChange = (e) => {
        const { name, email, password, tos } = e.target;
    };

    return (
        <form>
            Building stuff
            <label> Please Enter a Name
                <input name='name' type='text' placeholder='Hector Barbossa' value={values.name} onChange={onChange} />
            </label>
            <label> Please Enter an email address
                <input name='email' type='email' value={values.email} placeholder='Yar1863@highseas.com' onChange={onChange} />
            </label>
            <label> Create a password
                <input name='password' type='password' value={values.password} placeholder='Must be at least 4 characters long' onChange={onChange} />
            </label>
            <label id='radio'>I accept the Terms of Use
                <input
                id='choice'
                name='terms'
                type='radio'
                value='accept'
                onChange={onChange}
                checked={values.terms === 'accept'}
                />
            </label>
            <label id='radio'>I am disinclined to acquiesce
                <input
                    id='choice'
                    name='terms'
                    type='radio'
                    value='decline'
                    onChange={onChange}
                    checked={values.terms === 'decline'}
                />
            </label>
            <button type='submit' submit={submit}>Submit</button>
        </form>
    );
}
