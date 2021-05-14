import './App.css';
// import logo from '../../logo.svg';
// import Link from '../Link/Link';
// import Linkimage from '../LinkImage/LinkImage';
// import List from '../List/List';
// import CustomBtn from '../CustomBtn/CustomBtn';
// import Tabula from '../Tabula/Tabula';
// import UnionNumbers from '../UnionNumbers/UnionNumbers';
import BattleField from '../BattleField/BattleField';
import Tactic from '../Tactic/Tactic';
import NewTactic from '../NewTactic/NewTactic';
import TableRow from '../TableRow/TableRow';
import Table from '../Table/Table';
import Changer from '../StateApp/StateApp';

function App() {

  return (
    <>
        {/* <UnionNumbers numbers1 = {[2, 7, 8, 9, 22, 10, 33]} numbers2 = {[5, 8, 9, 15, 22, 33]}/> */}
        {/* <BattleField n={6} tank={{x: 0, y: 4}} direction='right' /> */}
        {/* <NewTactic tactic='4-3-3'/>; */}
        <Changer/>
    </>
    
  )
}

export default App;
