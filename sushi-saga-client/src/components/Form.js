import React from 'react'

export default class Form extends React.Component {
    state = {
        money: 0
    }

    handleChange = e => {
        this.setState({
            money: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addMoney(this.state.money)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='money' onChange={this.handleChange}></input>
                    <button>Add Money</button>
                </form>
            </div>
        )
    }
}