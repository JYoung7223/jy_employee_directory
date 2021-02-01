import logo from './logo.svg';
import './App.css';

function App() {
  return (    
    <div className="App">
      <header>
        <div className="container-fluid bg-dark text-light px-auto">
          <h1>Employee Directory</h1>
        </div>
      </header>
      <section>
        <div className="container text-dark py-3">
          <table className="table-striped border mx-auto">
            <thead className="border-bottom">
              <tr>
                <th>a</th>
                <th>b</th>
                <th>c</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>2</td>
                <td>3</td>
              </tr>
              <tr>
                <td scope="row">6</td>
                <td>4</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>{/* <Employees/> */}
        </div>
      </section>
      <footer>
      <div className="container-fluid bg-dark text-light px-auto">
          <h1><i className="fa fa-copyright" aria-hidden="true"></i> Copyright {new Date().getFullYear() }</h1>
        </div>
      </footer>
    </div>
  );
}

export default App;
