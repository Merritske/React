import React from "react"

function Clock(){
    return(
   <div>
<Secon />
<Calendar/>
</div>
 
    )
}



class Secon extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

componentDidMount(){
this.timerID = setInterval(
    ()=> this.tick(), 1000)
}
componentWillUnmount(){
clearInterval(this.timerID)
}
tick(){
    this.setState({
        date: new Date()
    })
}
    render(){
    return( <div>
            <h1>Let's make the clock ticking</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div> 
    )
}

}
const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date} </p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
export default Clock
