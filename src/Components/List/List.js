// import ListItem from './ListItem/ListItem'

import ListItem from "./ListItem/ListItem";

function List(){
    const persons = ['taia', 'laglaga', 'bardgala', 'gargala', 'dandala', 'yvergrdzela'];
    const ReturnedPersons = persons.map((element, index) => <ListItem key={index} el={element}/>);
    return (
        <ul>{ReturnedPersons}</ul>
    )
}

export default List;