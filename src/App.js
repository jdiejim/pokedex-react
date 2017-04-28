import React, { Component } from 'react';
import PokeDataView from './views/pokedata-view/pokedata-view.js';
import SpritView from './views/sprite-view.js';
import Pokemon from './model/pokemon.js';
import POKEID from './POKEID.json'
import './App.css';

// TODO: refactor render
// TODO: error checker if empty

class App extends Component {
  constructor(props) {
    super(props);
    this.getPokeData = this.getPokeData.bind(this);
    this.state = {
      pokemon: ''
    }
  }

  getPokemon(pokeName) {
    return POKEID[pokeName.toLowerCase()].id;
  }

  getPokeData(e) {
    e.preventDefault();
    let pokemon = new Pokemon(this.getPokemon(this.textInput.value));
    fetch(pokemon.pokeURL)
        .then(response => response.json())
        .then(data => {
          pokemon.name = data.name;
          pokemon.type = data.types[0].type.name;
          this.setState({
            pokemon: pokemon
          })
        })
        .catch(e => console.log(e));
    this.textInput.value = '';
    this.textInput.focus();
  }

  render() {
    return (
      <section className='pokedex'>
        <div>
          <div className='data-wrapper'>
            <SpritView sprite={this.state.pokemon.sprite}/>
          </div>
          <PokeDataView pokemon={this.state.pokemon}/>
        </div>
        <form onSubmit={this.getPokeData}>
          <input ref={ input => this.textInput = input } placeholder='Pokemon Name'/>
          <button>go</button>
        </form>
      </section>
    )
  }
}

export default App;
