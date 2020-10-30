import { Component } from "react"

const activeStyle = {
  backgroundColor: "purple"
}
  
const inactiveStyle = {
  backgroundColor: "yellow"
}

class Buttons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedButton: "",
      padStyle: inactiveStyle
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.activatePad = this.activatePad.bind(this)
    this.deactivatePad = this.deactivatePad.bind(this)
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log(e.target)
    this.playSound(e.target.name.toUpperCase())
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  } 

  handleKeyPress(e) {
    e.preventDefault()
    if(e.key.toUpperCase() === this.props.letter) {
      console.log(e.key.toUpperCase())
      this.playSound(e.key.toUpperCase())
    }
  }

  playSound(key) {
    var sound = document.getElementById(key)
    sound.value = this.props.sound
    sound.volume = this.props.sound / 100
    sound.currentTime = 0
    sound.play()
    setTimeout(() => this.activatePad(key), 100)
    setTimeout(() => this.deactivatePad(key), 200)
    this.props.changeDisplay(this.props.id.replace(/-/g, ' '))
  }

  activatePad(key) {
    console.log("activestate");
    this.setState({
      padStyle: activeStyle
    })
  }

  deactivatePad(key) {
    console.log("inactivestate");
    this.setState({
      padStyle: inactiveStyle
    })
  }

  render() {
    return (
        <button  className="drum-pad" id={this.props.id} style={this.state.padStyle} name={this.props.letter} onKeyUp={this.handleKeyPress} onClick={this.handleClick} value={this.props.letter}>{this.props.letter}
          <audio className="clip" id={this.props.letter} src={this.props.src} preload="auto" />
        </button>
    )
  }
}

export default Buttons 