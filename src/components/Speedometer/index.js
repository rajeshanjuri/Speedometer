// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrement = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }

    if (speed === 200) {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  onDecrement = () => {
    const {speed} = this.state

    if (speed >= 200) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }

    if (speed === 200) {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="odo-logo"
          alt="speedometer"
        />
        <h1 className="speedRange">Speed is {speed}mph</h1>
        <p className="description">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button type="button" className="btn1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="btn2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
