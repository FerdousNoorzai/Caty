import {Component} from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters : [],
      searchName: ''
    }
  }

  componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(json => this.setState({monsters: json}))
  .then(()=> console.log('Users fetch successfully!'))
}

  handleChange = (e)=>{
    this.setState({searchName: e.target.value.toLocaleLowerCase()});
 }
  render() {
    const filteredMonsters = this.state.monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(this.state.searchName)
    });
    
    return (
      <>
      <input type="search" id="search-box" placeholder='Search here'
       onChange={this.handleChange}
      />
      {
        filteredMonsters.map((monster)=> <h3 key={monster.id}>{monster.name}</h3>)
      }
      </>
    )
  }
}

export default App;