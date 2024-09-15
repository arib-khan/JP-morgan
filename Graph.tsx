

// import React, { Component } from 'react';

// // Extend HTMLElement to include the `load` method for the PerspectiveViewerElement
// interface PerspectiveViewerElement extends HTMLElement {
//   load: (data: any[]) => void;
// }

// interface IProps {
//   data: any[];
// }

// class Graph extends Component<IProps> {
//   componentDidMount() {
//     try {
//       const elem = document.getElementsByTagName('perspective-viewer')[0] as PerspectiveViewerElement;
      
//       // Configure graph attributes
//       elem.setAttribute('view', 'y_line');
//       elem.setAttribute('column-pivots', '["stock"]');
//       elem.setAttribute('row-pivots', '["timestamp"]');
//       elem.setAttribute('columns', '["top_ask_price"]');
//       elem.setAttribute('aggregates', JSON.stringify({
//         stock: 'distinct',
//         top_ask_price: 'avg',
//         top_bid_price: 'avg',
//       }));

//       // Load the data into the graph
//       elem.load(this.props.data);
//     } catch (error) {
//       console.error('Error in Graph component:', error);
//     }
//   }

  
//   render() {
//     return <perspective-viewer></perspective-viewer>;
//   }
// }

// export default Graph;

import React, { Component } from 'react';
import '@finos/perspective-viewer'; // Import Perspective viewer
import '@finos/perspective-viewer-d3fc'; // Import Perspective's D3FC plugin for rendering graphs

// Extend HTMLElement to include the `load` method for the PerspectiveViewerElement
interface PerspectiveViewerElement extends HTMLElement {
  load: (data: any[]) => void;
}

interface IProps {
  data: any[];
}

class Graph extends Component<IProps> {
  componentDidMount() {
    try {
      // Get the custom element <perspective-viewer>
      const elem = document.getElementsByTagName('perspective-viewer')[0] as PerspectiveViewerElement;
      
      // Configure graph attributes
      elem.setAttribute('view', 'y_line');
      elem.setAttribute('column-pivots', '["stock"]');
      elem.setAttribute('row-pivots', '["timestamp"]');
      elem.setAttribute('columns', '["top_ask_price"]');
      elem.setAttribute('aggregates', JSON.stringify({
        stock: 'distinct',
        top_ask_price: 'avg',
        top_bid_price: 'avg',
      }));

      // Load the data into the graph
      elem.load(this.props.data);
    } catch (error) {
      console.error('Error in Graph component:', error);
    }
  }

  render() {
    return <perspective-viewer></perspective-viewer>;
  }
}

export default Graph;
