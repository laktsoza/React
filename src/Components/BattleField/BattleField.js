import PropTypes from 'prop-types';

import './style.css';
import tankImg from '../../images/tank.png';


function BattleField({n, tank, direction='up'}) {
    let sections = [];

    for(let x = 0; x < n; x++) {
        let divs = [];
        let spans = [];
        for(let y = 0; y < n; y++) {
            if(!(tank.y === y && tank.x === x)) {
                spans.push(<span key={y}></span>);
            } else {
                spans.push(<span key={y}><img alt='tank' className={direction} src={tankImg}/></span>)
            }
        }
        divs.push(<div className="row" key={x}>{spans}</div>)
        sections.push(divs)
    }
    

    return (
        <>
            <section>{sections}</section>
        </>
    )
}

BattleField.propTypes = {
    n: PropTypes.number.isRequired,
    tank: PropTypes.exact({
        x: PropTypes.number,
        y: PropTypes.number
    }).isRequired,
    direction: PropTypes.oneOf(['up', 'right', 'down', 'left'])
}

export default BattleField;