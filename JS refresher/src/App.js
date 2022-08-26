import logo from './logo.svg';
import './App.css';

function App() {
  

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ae1f22826emshd3c4f5f8c5a663fp175d2ejsn0525695c57d0',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };
  
  fetch('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=36.2&lon=-78.5', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
