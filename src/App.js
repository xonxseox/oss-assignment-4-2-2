import logo from './myImage.jpeg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          22100328 반종석 과제 4-2
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React를 배워보자
        </a>
      </header>
    </div>
  );
}

export default App;
