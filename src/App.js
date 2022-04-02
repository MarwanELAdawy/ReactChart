import logo from './logo.svg';
import './App.css';
import Barchart from './components/Barchart/Barchart';
import Piechart from './components/Piechart/Piechart';
import Linechart from './components/Linechart/Linechart';


function App() {
  return (
    <div className="App">
      <>
      <div className="container">
        <div className="row">
          <div className='col-3'>
            <Barchart />  
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className='col-3'>
            <Piechart />
          </div>
        </div>
      </div>
      <div className="row">
        <div className='col-3'>
          
        </div>
      </div>
      <div className="row">
        <div className='col-3'> 
          <Linechart />
        </div>
      </div>
      </>
    </div>
  );
}

export default App;
