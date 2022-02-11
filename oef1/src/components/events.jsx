import React from "react"
function Schakelaar(){
    return <Toggle/>
}
class Toggle extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn : true}
       this.handleClick = this.handleClick.bind(this) }
handleClick(){
    this.setState(prevState=>({
isToggleOn : !prevState.isToggleOn
    }))
}
render(){
    return(
<button className="schakelaar"  onClick={this.handleClick}>{this.state.isToggleOn? "ON": "OFF"}</button>
    )}
}
export default Schakelaar
