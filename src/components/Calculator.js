
import React,{Component} from "react"
import Result from './result'
import KeypadComponent from './KeypadComponent'

class Calculator extends Component{
 constructor(){
          super()
          this.state={
                  result:""
          }
 }

 onclick=(button)=>{
         if(button ==='='){
                  this.calculate()}
         else if(button === 'CE'){
                  this.clear()
         }else if(button ==='C'){
                  this.reset()
         }else{
                  this.setState({
                           result:this.state.result + button
                  })
         }
         
          }

 calculate=()=>{
         try{
         this.setState({
                  result:(eval(this.state.result) || "") + "" 
                 })}catch(e){
         this.setState({
                  result:'error'
})
                 }
}

 reset=()=>{
         this.setState({
                  result:" "
         })
          }

clear=()=>{
         this.setState({
                  result:this.state.result.slice(0,-1)
                   })
          }          

render(){
 return(
         <div>
         <Result result={this.state.result}/>
         <KeypadComponent onClick={this.onclick}/>
         </div>
                             
           )
          }                      
}
export default Calculator