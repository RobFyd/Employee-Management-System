import { Header } from "@ems/common-ui"

const data = [{
    name: {
        first: 'John',
        last: 'Kowalski'
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
    return (
        <div>
            <Header>List</Header>
            {data.map()}
        </div>
    )
}