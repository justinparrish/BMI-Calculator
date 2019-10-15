import React from 'react';
import './App.css';

const getCalculatedBmi = (number) => (<span>{number.bmi}</span>)

class BmiForm extends React.Component {
  
  render = () => (
    <form>
      <label>Height</label>
      <input type='range' min='40' max='96' name='height' />
      <label>Weight</label>
      <input type='range' min='70' max='400' name='weight' />
      <input type='submit' value='Calculate' />
    </form>
  )
}
const test = { bmi: undefined, height: undefined, weight: undefined }


class App extends React.Component {
  state = {
    bmi: undefined,
    height: undefined,
    weight: undefined
  }

  render = () => (
    <div>
      <h1>BMI Calculator</h1>
      <BmiForm />
    </div>
  );
}

export default App;
