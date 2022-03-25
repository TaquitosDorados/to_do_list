import React, { Component } from 'react';
import "./Home.css"

class Home extends Component {
constructor(props) {
    super();

    this.state = {
        name:'Paulo',
    }
}

componentDidMount(){
    setTimeout(() => {
        this.setState({name: 'Reyes',})
    }, 2000);
}

    render() {
        {/* Styles inline */}
        const buttonStyle = {
            border: '1px solid red',    
        }

        

        return (
            <div className="Home">
                <h1>{this.state.name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                
                <a href="https://www.youtube.com/watch?v=snwd7B_1cKY">Youtube</a>
            <div>
                {/* Styles inline */}
                <button style={{
                    backgroundColor: 'red',
                    border: '1px solid red',
                }}>
                    Click
                </button>
                {/* Styles objects */}
                <button style={buttonStyle}>
                    Click
                </button>
            </div>
            </div>
        );
    }
}

export default Home;