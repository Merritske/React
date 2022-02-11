import './App.css';

import Search from './components/search';
import MagicEightBall from './components/magicEightBall';
import GameOfChance from './components/winOrLoose';
import GateKeeper from './components/changeStyleCondition';
import MyToDoList from './components/toDoList';
import Frameworks from './components/keyAdding';
import MyComponent from './components/onlineUsers';

function App() {
  return (
    <div className="App">
   <GameOfChance/>
    <MyComponent/>
  <Search/>
  {/* <ProductTable /> */}
  <MagicEightBall/>
  <GateKeeper/>
  <MyToDoList/>
  <Frameworks/>
 
    </div>
  );
}

export default App;
