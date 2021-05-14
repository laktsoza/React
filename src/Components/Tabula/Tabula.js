import PropTypes from 'prop-types';

function Tabula({numbers = []}) {
    let x = [];
    numbers.forEach((element, index) => {
        numbers.forEach((element2, index2) => {
            x.push(
                <tr key={index +''+ index2}>
                    <td>{element}</td>
                    <td>{element2}</td>
                    <td>{element * element2}</td>
                </tr>
            )
        })
    });

    let border = (x.length) ? '1' : '0'; 
    
    return (
        <table border = {border} width = '100'>
            <tbody>
                {x}
            </tbody>
        </table>
    )
}

Tabula.propTypes = {
    numbers:  PropTypes.arrayOf(PropTypes.number)

}

export default Tabula;