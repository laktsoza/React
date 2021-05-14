import './Tactic.css';

function Tactic({tactic}){
    let field = [];
    let divs = [];
    let defence = [];
    let midfielder = [];
    let attack = [];

    for(let i = 0; i < parseInt(tactic[0]); i++) {
        defence.push(<span></span>)
    }
    for(let i = 0; i < parseInt(tactic[2]); i++) {
        midfielder.push(<span></span>)
    }
    for(let i = 0; i < parseInt(tactic[4]); i++) {
        attack.push(<span></span>)
    }

    if(parseInt(tactic[8])) {
        let fifth = [];
        for(let i = 0; i < parseInt(tactic[8]); i++) {
            fifth.push(<span></span>)
        }
        divs.push(<div className='row'>{fifth}</div>);
    }

    if(parseInt(tactic[6])) {
        let forth = [];
        for(let i = 0; i < parseInt(tactic[6]); i++) {
            forth.push(<span></span>)
        }
        divs.push(<div className='row'>{forth}</div>);
    }

    divs.push(<div className='row'>{attack}</div>);
    divs.push(<div className='row'>{midfielder}</div>);
    divs.push(<div className='row'>{defence}</div>);

    field.push(divs);
    
    return (
        <div>
            {field}
        </div>
    )
}

export default Tactic;