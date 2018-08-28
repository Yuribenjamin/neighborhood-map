import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './Header'

class App extends Component {

  state = {
    venues: []
  }


  componentDidMount() {
    this.getVenues()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Uc0ijnu0YBte1XEnPcChy6CRn84VTNE&callback=initMap")
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "YKMMQBCQEIR5PSIEIADJMQY4PWZVJAA035MMNN0KQINCS13P",
      client_secret: "2E5JADXJRUMOEQK2XBBCAZ3LYZSBJ2KFC1MW234KUJODTNU2",
      query: "coffee",
      near: "cairo",
      v: "20182708"
    }
    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.renderMap())
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })
  }
  

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.0444, lng: 31.2357},
      zoom: 13
    })

    var infowindow = new window.google.maps.InfoWindow()

    this.state.venues.forEach(myVenue => {
      var contentString = `${myVenue.venue.name}`
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat,
        lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })
      marker.addListener('click', function() {
        infowindow.setContent(contentString)
        infowindow.open(map, marker)
      })

    })
  }


  render() {
    return (
      <main>
        <Header/>
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
