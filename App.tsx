// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App

import React, { Component } from 'react';
import Graph from './Graph';

interface IState {
  data: any[];
  showGraph: boolean;
}

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [],
      showGraph: false,
    };
  }

  // Method to fetch data from server continuously
  getDataFromServer() {
    try {
      setInterval(async () => {
        // Fetch data from server (you'll need to replace this with your server's URL)
        const response = await fetch('your-server-url');
        const data = await response.json();

        // Update state with new data
        this.setState({ data });
      }, 1000); // Fetch every second
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Method to render the graph
  renderGraph() {
    if (this.state.showGraph) {
      return <Graph data={this.state.data} />;
    }
    return null;
  }

  // Method triggered by the button to start streaming data
  startStreamingData = () => {
    this.setState({ showGraph: true });
    this.getDataFromServer();
  };

  render() {
    return (
      <div>
        <button onClick={this.startStreamingData}>Start Streaming Data</button>
        {this.renderGraph()}
      </div>
    );
  }
}

export default App;

