import TableRow from '../TableRow/TableRow';

function Table({persons}){
   let trs = persons.map(element => trs.push(<TableRow person={element}/>));

    return (
        <table border='1'>
            <tbody>
                {trs}
            </tbody>
        </table>
    )
}

export default Table;