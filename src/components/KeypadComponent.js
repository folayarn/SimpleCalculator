
import React,{Component} from "react"
import {Button} from 'react-bootstrap'

class KeypadComponent extends Component{
 

 render(){

const button={
         width:'85px'
}

return(
<div className="button">
<Button name="(" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">(</Button>
<Button name="CE" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">CE</Button>
<Button name=")" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">)</Button>
<Button name="C" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">C</Button>

<Button name="1" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">1</Button>
<Button name="2" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">2</Button>
<Button name="3" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">3</Button>
<Button name="+" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">+</Button>

<Button name="4" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">4</Button>
<Button name="5" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">5</Button>
<Button name="6" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">6</Button>
<Button name="-" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">-</Button>

<Button name="7" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">7</Button>
<Button name="8" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">8</Button>
<Button name="9" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">9</Button>
<Button name="*" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">x</Button>

<Button name="." size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">.</Button>
<Button name="0" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">0</Button>
<Button name="=" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">=</Button>
<Button name="/" size="lg" style={button} onClick={e=>this.props.onClick(e.target.name)} variant="outline-dark">/</Button>
</div>

)
 }





}

export default KeypadComponent