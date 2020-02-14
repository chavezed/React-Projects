import React from "react"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            age: null,
            location: "",
            vegetarian: false,
            lactoseFree: false,
            kosher: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        if (type === "checkbox") {
            this.setState({
                [name]: checked
            })
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    handleSubmit() {
        alert("Submitted. Thank you!")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    name="firstName" 
                    value={this.state.firstName}
                    onChange={this.handleChange}
                /> 
                <br />
                <input 
                    type="text" 
                    placeholder="Last Name" 
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                /> 
                <br />
                <input 
                    type="number" 
                    placeholder="Age" 
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                /> 
                <br />
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={this.handleChange}
                    /> Male
                </label>
                <br />
                <label>
                    <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={this.handleChange}
                        /> Female
                </label>
                <br />
                <select
                    value={this.state.location}
                    name="location"
                    onChange={this.handleChange}    
                >
                    <option value="">Choose flight location</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="New York">New York</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Austin">Austin</option>
                </select>
                <br />
                <label>
                    <input 
                        type="checkbox"
                        name="vegetarian"
                        checked={this.state.vegetarian}
                        onChange={this.handleChange}
                    /> Vegetarian?
                </label>
                <br />
                <label>
                    <input 
                        type="checkbox"
                        name="lactoseFree"
                        checked={this.state.lactoseFree}
                        onChange={this.handleChange}
                    /> Lactose Free?
                </label>
                <br />
                <label>
                    <input 
                        type="checkbox"
                        name="kosher"
                        checked={this.state.kosher}
                        onChange={this.handleChange}
                    /> Kosher?
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}



export default Form