import React, { Component } from 'react'

export default class Cards extends Component {

state = {
    flipped: true,
}

changePic = () => {
    this.setState({
        flipped: !this.state.flipped,
    })
}


    render() {
        const { flipped } = this.state;
        const { name, hp, sprites } = this.props.pokemon

        return (
            <div className="card">
                <img src={flipped ? sprites.front : sprites.back} alt= "" />
                
                <p>{name}</p>
                <p>{hp}</p>
                
               
               
               <button onClick={this.changePic}>Flip Pic</button>
            </div>
        )
    }
}
