
function UnionNumbers({numbers1, numbers2}) {
    let spans = [];
    numbers1.forEach(element => {
        spans.push(<span className={numbers2.includes(element) ? 'blue' : ''}> {element} </span>);
    });
    numbers2.forEach(element2 => {
        if(!numbers1.includes(element2)) {
            spans.push(<span> {element2} </span>);
        }
    })
    
    return (
        <div>
            {spans}
        </div>
    )
    
}

export default UnionNumbers;


