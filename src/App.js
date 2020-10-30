import { Component } from "react"
import Buttons from "./Buttons"
import "./css/app.css"

const audioList = [
  {
    id:'Snare', 
    letter: 'Q', 
    keycode: 81, 
    src:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  },
  {
    id:'Side-Stick', 
    letter: 'W', 
     keycode: 87, 
     src:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
  {
    id:'Punchy-Kick', 
    letter: 'E', 
    keycode: 69, 
    src:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    id:'Shaker', 
    letter: 'A', 
    keycode: 65, 
    src:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    id:'Clap', 
    letter: 'S', 
    keycode: 83, 
    src :"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    id:'Open-HH', 
    letter: 'D', 
    keycode: 68, 
    src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    id:'Kick-n\'-Hat', 
    letter: 'Z', 
    keycode: 90, 
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    id:'Kick', 
    letter: 'X', 
    keycode: 88, 
    src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    id:'Closed HH', 
    letter:'C', 
    keycode: 67, 
    src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      display: "",
      sound: 30
    }
    this.changeDisplay = this.changeDisplay.bind(this)
    this.handleRange = this.handleRange.bind(this)
  }

  changeDisplay(text) {
    this.setState({
      display: text
    })
  }

  handleRange(e) {
    this.setState(prevState => ({
      sound: e.target.value,
      display: `Volume: ${prevState.sound}%`
    }))
  }
  

  render() {
    return (
      <div className="container">
        <div id="drum-machine">
          <div id="display" style={{fontSize: "4rem", margin: "100px"}}>{this.state.display}</div>
          <input type="range" id="range" min="1 " max="100" step="1" value={this.state.sound} onChange={this.handleRange}></input>
          <div id="pad-buttons">
            {audioList.map((item, id) => (
              <Buttons 
                key={id}
                id={audioList[id].id}
                letter={audioList[id].letter}
                src={audioList[id].src}
                keycode={audioList[id].keycode}
                changeDisplay={this.changeDisplay}
                sound={this.state.sound}
              />
            ))}
          </div>
          
        </div>
      </div>
    )
  }
}

export default App;