const BasicTypes = () => {
    const name = 'Yessica';
    const age = 38;
    const isActive = false;
    const powers = ['React', 'Native'];
    return (
        <div>
            {name} - {age} - {isActive ? 'Activo' : 'Inactivo'}
            <p>{powers.join(', ')}</p>
        </div>
    )
}

export default BasicTypes
