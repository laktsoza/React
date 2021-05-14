import PropTypes from 'prop-types';

function SumUp({firstValue, secondValue}) {
    return (
        <p>
            <span>{firstValue} + {secondValue} = {firstValue + secondValue}</span>
        </p>
    )
}

SumUp.propTypes = {
    firstValue: PropTypes.number,
    secondValue: PropTypes.number.isRequired
}

export default SumUp;