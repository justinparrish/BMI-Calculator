import React from 'react';
import './App.css';

const getCalculation = (number) => (
  <span>
    {number.bmi} <div className='status'></div>
  </span>
  )


class BmiForm extends React.Component {
  state = {
    height: undefined,
    weight: undefined
  }

  handleInput = (evnt) => {
    let state = {...this.state}

    state[evnt.target.name] = evnt.target.value

    this.setState(state)
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault()

    this.props.calculateBmi(this.state)
  }

  render = () => (
    <form onSubmit={this.handleSubmit}>
      <label>Height</label>
      <input type='range' min='40' max='96' name='height' onChange={this.handleInput} /><br />
      <label>Weight</label>
      <input type='range' min='70' max='400' name='weight' onChange={this.handleInput} /><br />
      <input type='submit' value='Calculate' /><br />
    </form>
  )
}


class App extends React.Component {
  state = {
    bmi: undefined,
    height: undefined,
    weight: undefined,
  }

  calculateBmi = (info) => {
    let state = {...this.state}

    let weight = info.weight
    let height = info.height * info.height

    let bmi = (weight / height) * 703
    
    state.bmi = bmi.toString().slice(0,5)

    this.setState(state)    
  }

  render = () => (
    <div className='container'>
      <h1>BMI Calculator</h1>
      {getCalculation(this.state)}
      <BmiForm calculateBmi={this.calculateBmi}/>
    </div>
  );
}

export default App;
