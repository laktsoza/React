import {useState} from 'react';

function Changer(){
    const [textArea, settextArea] = useState('');
    const [text, settext] = useState('');

    function getArea(e){
        settextArea(e.target.value)
    }
    function render() {
        settext();
    }
    let lis = [];

    return (
        <div>
            <textarea onChange={getArea}/>
            <button onClick={render}>click</button>
            <ul></ul>
        </div>
    )
}

export default Changer;