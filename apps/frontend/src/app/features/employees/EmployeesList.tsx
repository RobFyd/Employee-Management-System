import { Header } from "@ems/common-ui"
import { useEffect, useState } from "react";

const data = [{
    name: {
        first: 'John',
        last: 'Kowalczyk'
    },
    email: 'john@kowalski.en',
    id: {
        name: '123'
    }
},
{
    name: {
        first: 'Eleonora',
        last: 'Smith'
    },
    email: 'eleonora@smith.en',
    id: {
        name: '456'
    }
}]

export const EmployeesList = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Uh oh, something has gone wrong. Please tweet us @randomapi about the issue. Thank you.');
            })
            .then((responseData) => setData(responseData.results));
    }, []);

    return (
        <div>
            <Header>List</Header>
            {data.map((elem) => (
                <div key={elem.id.name}>
                    <div>
                        {elem.name.first} {elem.name.last}
                    </div>
                </div>
            ))}
        </div>
    );
};