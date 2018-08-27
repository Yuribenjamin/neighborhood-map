import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.renderMap()
  }
  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Uc0ijnu0YBte1XEnPcChy6CRn84VTNE&callback=initMap")
    window.initMap = this.initMap
  }
  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.0444, lng: 31.2357},
      zoom: 8
    })
  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    );
  }
}

function loadScript (url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}


export default App;
