import React from 'react';
import { Button, Form, Slider } from 'antd'
import './App.css';

const getCalculation = (number) => (
  <span>
    {number.bmi} <div className='status'>Status</div>
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
    <Form onSubmit={this.handleSubmit}>
      <Form.Item label='Height'>
      <input type='range' min='48' max='84' name='height' onChange={this.handleInput} />
      </Form.Item>
      <Form.Item label='Weight'>
      <input type='range' min='70' max='400' name='weight' onChange={this.handleInput} />
      </Form.Item>
      <input type='submit' value='Calculate' />
    </Form>
  )
}


class App extends React.Component {
  state = {
    bmi: undefined,
    height: undefined,
    weight: undefined,
  }

  statusColor = () => {
    let status = document.querySelector('.status')
    if (this.state.bmi < 18.50) {
      status.style.background = 'yellow'
      status.innerHTML = 'Underweight'
    }
    else if (this.state.bmi >= 18.50 && this.state.bmi <= 24.90) {
      status.style.background = 'green'
      status.innerHTML = 'Normal Weight'
    }
    else if (this.state.bmi >= 25.00 && this.state.bmi <= 29.90) {
      status.style.background = 'orangered'
      status.innerHTML = 'Overweight'
    }
    else if (this.state.bmi >= 30.00) {
      status.style.background = 'red'
      status.innerHTML = 'Obesity'
    }
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
      {getCalculation(this.state, this.statusColor())}
      <BmiForm calculateBmi={this.calculateBmi}/>
    </div>
  );
}

export default App;
