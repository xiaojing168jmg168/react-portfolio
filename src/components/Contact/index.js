
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <div className='container'>
            <h2 className='mt-5 mb-5'>Contact Me</h2>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange} className="form-control" id="exampleFormControlInput1" placeholder=""/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name="email" defaultValue={email} onBlur={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <br></br>
                <textarea className="textarea" name="message" defaultValue={message} onBlur={handleChange} id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            {errorMessage && (
                <div>
                    <p className="is-danger">{errorMessage}</p>
                </div>
            )}
            <div class="mb-5" >
                <button data-testid='button' class="btn btn-primary btn-lg " type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>

        </div>
    );
}
export default Contact