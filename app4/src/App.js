import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cars: []
    }
  }

  getCars = () => {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
      .then(res => {
        this.setState({
          cars: res.data
        });
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    const listOfCars = this.state.cars.map(car => {
      return(
        <div key={car.id}>
          <h3>{car.year} {car.make} {car.model}</h3>
          <p>${car.price}</p>
        </div>
      )
    })
    
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {listOfCars}
      </div>
    );
  }
}

export default App;
