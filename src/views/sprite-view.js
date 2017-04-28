import React, { Component } from 'react';
import sprites from '../images/sprites.png'

class SpritView extends Component {
  render() {
    let style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
      height: 100,
      backgroundColor: '#232323',
      borderRadius: 10
    }
    let sprite = {
      width: 96,
      height: 96,
      backgroundImage: 'url(' + sprites +')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: this.props.sprite,
      backgroundSize: '100%'
    }
    return (
      <div style={style}>
        <div style={sprite}></div>
      </div>
    )
  }
}

export default SpritView;
