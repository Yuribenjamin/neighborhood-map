import React, { Component } from 'react'
import Searchbar from './Searchbar'
import axios from 'axios'


class Mymap extends Component {

    state = {
        venues: []
      }
    
    
      componentDidMount() {
        this.getVenues()
      }
    
      // function that render map and display alret if map failed to load

      renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Uc0ijnu0YBte1XEnPcChy6CRn84VTNE&callback=initMap")
        window.initMap = this.initMap
        // if map failed to load 
        //https://developers.google.com/maps/documentation/javascript/events
        window.gm_authFailure = function() {
            alert('Google maps failed to load!')
      } 
      }
    
      // function that fetch veneues using axios package

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
      
      // function that initialize the map
      initMap = () => {
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: {lat: 30.0444, lng: 31.2357},
          zoom: 13
        })
        // ceate information window 
        var infowindow = new window.google.maps.InfoWindow()
        // loop throw each venue use foreach to display dynamic markers
        this.state.venues.forEach(myVenue => {
          var contentString = `${myVenue.venue.name}`
          // create the marker
          var marker = new window.google.maps.Marker({
            position: {lat: myVenue.venue.location.lat,
            lng: myVenue.venue.location.lng},
            map: map,
            title: myVenue.venue.name
          })
          // event handle click on the marker
          marker.addListener('click', function() {
            // change the contet
            infowindow.setContent(contentString)
            // and open the info window
            infowindow.open(map, marker)
          })
    
        })
      }
    
    render() {
        return(
            <div>
            <Searchbar/>
            <div id="map">
            </div>
            </div>
        )
    }
}

/**
 * loadScript function that create script tag use DOM 
 * the tag holds google maps API src async defer 
 */ 
function loadScript (url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }

export default Mymap