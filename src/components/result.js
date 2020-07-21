
import React,{Component} from "react"


class result extends Component{
 


 render(){

const label={
         paddingRight:'7px'
}
const {result}=this.props
return(

<div id="result"><h2 style={label} className="text-right">{result}</h2></div>

)
 }
}

export default result