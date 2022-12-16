import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className='form bg-purple-200'>
            <form action="https://form.jotform.com/223431414970451">
                <label>Your Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder='Type your message here'></textarea>
            <button className='btn'>Send</button>
            </form>
        </div>
    );
};

export default Form;