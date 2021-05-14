import '../Tactic/Tactic.css';

function NewTactic({tactic}) {
    let tacticToArray = [];
    let field = [];
    for (let i = 0; i < tactic.length; i++) {
        if(i === 0 || i%2 === 0){
            tacticToArray.push(parseInt(tactic[i]))
        } else {
            tacticToArray.push(0)
        } 
    }
    tacticToArray.forEach((element, index) => {
        let spans = [];

        for(let i = 0; i < element; i++) {
            spans.push(<span key={i}></span>);
        }
        field.unshift(<div key={index} className="row">{spans}</div>)
        
    });

    return (
        <div className='container'>
            {field}
        </div>
    )
}

export default NewTactic;