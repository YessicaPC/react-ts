
const BasicFunction = () => {
    const addTwoNumbers = (a: number, b: number): number => {
        return a + b
    }

    return (<>
        <h3>Funciones</h3>
        <span>El resultado de suma 2+1 = {addTwoNumbers(2, 1)}</span>
    </>
    )
}

export default BasicFunction
