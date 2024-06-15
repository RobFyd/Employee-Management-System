import { FormEventHandler, useState } from 'react';
import { Button } from "@ems/common-ui";

import "./RegistrationForm.module.css";

export const RegistrationForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit: FormEventHandler = (event) => {
        event.preventDefault();
        console.log(firstName, lastName, age);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First name: </label>
                <input
                    id="firstName"
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last name: </label>
                <input
                    id="lastName"
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="age">Age: </label>
                <input
                    id="age"
                    type="number"
                    onChange={(event) => setAge(event.target.value)}
                />
            </div>
            <Button type="submit" label="Send" />
        </form>
    )
};
