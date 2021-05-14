

function TableRow({person}) {
   
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.age}</td>
        </tr>
    )
}

export default TableRow;