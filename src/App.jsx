import { Component } from "react";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      users: [], 
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => this.setState({users:data}))
    .then(()=> console.log('users fetched successfully!'))
  }

  handleSearch = (event) => {
  this.setState({searchField: event.target.value.toLocaleLowerCase()});
  }
  
  render(){
    const filteredNames = this.state.users.filter((user)=> user.name.toLocaleLowerCase().includes(this.state.searchField))
    return(
    <div className="App">
      <h1>CatY World</h1>
      <input type="search" className="search-box" placeholder="Search here" onChange={this.handleSearch}/>
      <div className="card-list">
      {filteredNames.map((user)=>
        <div className="card-container" key={user.id} >
          <img src={`https://robohash.org/${user.id}?set=set4`} width={200} alt={user.name} />
          <h4>{user.name}</h4> 
          <p>{user.email}</p>
      </div>) 
      }
      </div>
    </div>
    )
  }
}

export default App;