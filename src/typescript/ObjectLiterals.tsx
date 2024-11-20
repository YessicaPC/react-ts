
interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address

}

interface Address {
    country: string;
    houseNo: string;
    street?: string
}
const ObjectLiterals = () => {
    const person: Person = {
        age: 39,
        firstName: 'Yessica',
        lastName: 'Palacios',
        address: {
            country: 'Mexico',
            houseNo: '614',
        }
    }

    return (
        <>
            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>
    )
}

export default ObjectLiterals
