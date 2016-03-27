var React = require('react');
var ReactDOM = require('react-dom');

var SolarSystem = require('./solarSystem.jsx')

var App = React.createClass({
  render: function() {
    return <SolarSystem />;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App />, document.getElementById('main'));
});
