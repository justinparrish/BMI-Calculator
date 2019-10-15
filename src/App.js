import React from 'react';
import './App.css';

const getCalculatedBmi = (number) => (<span>{number.bmi}</span>)


const BmiForm = () => (
  <form>
    <label>Height</label>
    <input type='range' min='40' max='96' name='height' />
    <label>Weight</label>
    <input type='range' min='70' max='400' name='weight' />
    <input type='submit' value='Calculate' />
  </form>
)

const App = () => {
  return (
    <div>
      <h1>BMI Calculator</h1>
      {BmiForm()}
    </div>
  );
}

export default App;
