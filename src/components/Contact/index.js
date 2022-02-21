import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if(e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section>
            <h1 className="content is-medium">Contact Me</h1>
            <br />

            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label" htmlFor="name">Name:</label>
                    <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                </div>
                <div className="field">
                    <label className="label" htmlFor="email">Email Address:</label>
                    <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange}/>
                </div>
                <div className="field">
                    <label className="label" htmlFor="message">Message:</label>
                    <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="is-danger">{errorMessage}</p>
                    </div>
                )}
                <button className="button is-medium is-primary is-fullwidth" type="submit">Submit</button>
            </form>

             <h4 className="content is-medium">Contact info</h4>
                <a id="email-link" href="mailto: jason.libertelli@gmail">Email: jason.libertelli@gmail.com</a>

        </section>
    )
}

export default Contact;