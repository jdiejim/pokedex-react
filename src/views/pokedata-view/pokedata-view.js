import React, { Component } from 'react';
import './pokedata-view.css'

class PokeDataView extends Component {
  render() {
    return (
      <div className="poke-data">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Type</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{this.props.pokemon.id}</td>
            <td>{this.props.pokemon.type}</td>
            <td>{this.props.pokemon.name}</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default PokeDataView;
