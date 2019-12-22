import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './app.css';

class App extends Component{
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=> {this.setState({users:users})})
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    render() {
        const filterRobots = this.state.users.filter(users => {
            return users.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return (
            <div className={'tc ma-1'}>
                <h1 className={'pa4 ma0 heading'}>RobotFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <hr className={'w-50 b--black br-pill'}/>
                <CardList users={filterRobots}/>
            </div>
        );
    }
}

export default App;
