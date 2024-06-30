import { Header } from "@ems/common-ui"
import { useEffect, useState } from "react";

interface UserDto {
    name: {
        first: string;
        last: string;
    };
    email: string;
    id: {
        name: string;
    };
}

export const EmployeesList = () => {

    const [data, setData] = useState<UserDto[]>([]);

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