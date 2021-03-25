import React,{Component} from 'react'
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'

class App extends Component {

  state={
    users:[],
    isLoading:false
  }

  async componentDidMount(){
    this.setState({isLoading:true});
    const response=await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &secret_id=${process.env.REACT_APP_GITHUB_SECRET_ID}`);
    this.setState({users:response.data,isLoading:false})
  }

  render(){
    return (
      <div>
        <Navbar />
        <Users users={this.state.users} isLoading={this.state.isLoading}/>
      </div>
    )
  }
}

export default App;
