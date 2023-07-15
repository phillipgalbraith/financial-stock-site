import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Row>
        <NavBar />
      </Row>
      <Row>
        <header className="App-header">
          <h1>
            Sprout Financial Stock Solution
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Take stock of your finances!
          </p>
        </header>
      </Row>
      
    </div>
  );
}

export default App;
