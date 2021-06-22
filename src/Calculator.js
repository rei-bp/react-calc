import React, { Component } from 'react'



export default class Calculator extends Component {
    state =  {
        num1: '',
        num2: '',
        total: ''        
    }
    
        setNum = (e, num) => {
            this.setState({ [num]: Number(e.target.value)})
        }


        addition (e, total) {
            this.setState ({ total: this.state.num1 + this.state.num2})
        }

    render () {

        return (
            <div className="container">
            <h1>Add with React!</h1>

                <div className="add">
                    <input type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onChange={ (e) => this.setNum(e, 'num1') }
                    />
                    <span>+</span>
                    <input type="number"
                        name="num2"
                        placeholder="Enter your second number"
                        value={this.state.num2}
                        onChange={ (e) => this.setNum(e, 'num2') }
                    />
                    <button onClick = { (e) => this.addition (e) }> = </button>
                    
                    <h3>Results here!</h3>
                    <p>{this.state.total}
                    </p>
                </div>
            </div>
        )
    }
}