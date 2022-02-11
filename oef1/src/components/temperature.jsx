import React from "react"

function Boil(props){
    if(props.celsius >= 100){
        return(
            <p>The water will boil.</p>
        )
    }
    return <p>The water will not boil.</p>
}

const scaleName = {
    c: "Celsius",
    f: "Fahrenheit"
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  function tryConvert(temperature, convert){
      const input = parseFloat(temperature);
      if(Number.isNaN(input)){
          return "";
      }
      const output = convert(input)
      const rounded = Math.round(output *1000)/1000;
      return rounded.toString()
  }
class TempInput extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {temperature: ""}
    }
    handleChange(e){
this.props.onTempChange(e.target.value)
    }
render(){
    const temperature = this.props.temperature
    const scale = this.props.scale
    return(
<fieldset className="temperature">
    <legend>
        Enter Temperature in {scaleName[scale]}:
    </legend>
    <input 
    value={temperature}
    onChange={this.handleChange} />
   
</fieldset>
    )
}
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleCelsiusChange= this.handleCelsiusChange.bind(this)
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
        this.state = {temperature: "", scale: "c"}
    }
handleCelsiusChange(temperature){
    this.setState({scale: "c", temperature})
}
handleFahrenheitChange(temperature){
    this.setState({scale: "f", temperature})
}
render(){
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === "f" ? tryConvert(temperature, toCelsius): temperature
    const fahrenheit = scale === "c"? tryConvert(temperature, toFahrenheit) : temperature

    return(
        <div>
            <TempInput 
            scale="c" 
            temperature={celsius}
            onTempChange = {this.handleCelsiusChange}/>

            <TempInput 
            scale= "f" 
            temperature={fahrenheit}
            onTempChange={this.handleFahrenheitChange}
            />
            
             <Boil celsius = {parseFloat(temperature)}/>
        </div>
    )
} }
export default Calculator