import React from "react"
class Flavor extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 'cherry' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    handleSubmit(event) {
        alert('your favorite flavor is ' + this.state.value)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label >
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="cherry">Cherry</option>
                        <option value="apple">Apple</option>
                        <option value="mango">Mango</option>
                        <option value="grapefruit">Grapefruit</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default Flavor