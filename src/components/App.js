import Home from './Home/Home';
import './App.css';
import Header from '../shared/layout/Header';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
import Todo from '../components/To_Do/todo';

function App() {
  return (
    <div className="App">
      
      <Header title="Mi App" url="https://github.com/"/>
      
      <Content>
         <Todo />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
