// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import ReactDOM from "react-dom";
import React, { Component } from "react";
import mirador from "mirador";

class Mirador extends Component {
    componentDidMount() {
        const { config, plugins } = this.props;
        mirador.viewer(config, plugins);
    }
    render() {
        const { config } = this.props;
        return <div id={config.id} />;
    }
}

export default Mirador;

ReactDOM.render(
    <Mirador config={{ id: "mirador" }} plugins={[]} />,
    document.getElementById("root")
);
