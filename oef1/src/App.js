import './App.css';
import FormatName from './components/formatName';
import Names from './components/welkom';
import Clock from './components/clock';
import Schakelaar from './components/events';
import LoginControl from './components/loginControl';
import Message from './components/message';
import Page from './components/warning';
import List from './components/listItems';
import Blog from './components/blog';
import NameForm from './components/nameForm';
import Flavor from './components/form';
import Calculator from './components/temperature';
import SpitPane from './components/inheritance';
function App() {
  return (
    <div className="App">

      <FormatName />
      <Names />
      <NameForm />
< LoginControl isLoggedIn ={true} />
      <Clock />
      <Schakelaar />
      
<Message unreadMessages={messages}/>

<Page/>
<List numbers={numbers}/>
<Blog posts={posts}/>
<Flavor />
<Calculator />
<SpitPane />
    </div>
  );
}

export default App;
const messages = ["find this", "Make that", "Rest"]
const numbers = [1,2,3,4,5,6,7]
const posts = [
  {id:1, title: "Hello world", content: "We are the world"},
  {id:2, title: "How are you?", content: "Let's hang out together"}
]
