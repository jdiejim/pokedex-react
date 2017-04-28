
class Pokemon {
  constructor(id) {
    this.id = id;
    this.pokeURL = 'https://pokeapi.co/api/v2/pokemon/' + this.id;
    this.sprite = '0 ' + this.id * -106 + 'px';
  }
}

export default Pokemon;
