import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import Searchbar from './Searchbar'
import axios from 'axios'


class Mymap extends Component {

    state = {
      query: '',
      markers: [],
      filteredPlaces: [],
      locations: [
        { name: "Naguib Mahfouz Cafe", location: { lat: 30.047963, lng: 31.261567 }, latlong: "30.047963,31.261567" },
        { name: "Room Art Space & Cafe", location: { lat: 30.03543629889637, lng: 31.231414418746162 }, latlong: "30.03543629889637,31.231414418746162" },
        { name: "Bubblicious", location: { lat: 30.065155534332987, lng: 31.217278507457564 }, latlong: "30.065155534332987,31.217278507457564" },
        { name: "Bab El Nil", location: { lat: 30.07221713024017, lng: 31.227788629626797 }, latlong: "30.07221713024017,31.227788629626797" },
        { name: "La Madeleine at Sofitel Cairo El Gezirah", location: { lat: 30.038783186860627, lng: 31.22447222471237 }, latlong: "30.038783186860627,31.22447222471237" },
        { name: "El Fishawi", location: { lat: 30.0474, lng: 31.2623 }, latlong: "30.0474,31.2623" },
        { name: "Beanos", location: { lat: 30.0485, lng: 31.2025 }, latlong: "30.0485,31.2025" },
        { name: "Grand Cafe", location: { lat: 30.0428, lng: 31.1984 }, latlong: "30.0428,31.1984" },
        { name: "Pottery Cafe", location: { lat: 30.0646, lng: 31.2157 }, latlong: "30.0646,31.2157" },
         ]
      }
    
      /**
       * Render the map and dipslay alert if map failed to load
       * using componentDidMount method
       */
      componentDidMount() {
        // loadScript function that render the map
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyB2Uc0ijnu0YBte1XEnPcChy6CRn84VTNE&callback=initMap")
        window.initMap = this.initMap
        // if map failed to load 
        //https://developers.google.com/maps/documentation/javascript/events
        window.gm_authFailure = function() {
            alert('Google maps failed to load!')
          } 
      }
     // function that initialize the map
      initMap = () => {
        //Decalare location and markers
        const { locations, markers } = this.state
        this.setState({ filteredPlaces: locations })
        // get the the map id and assign to map variable
        var map = new window.google.maps.Map(document.getElementById('map'), {
          center: { "lat": 30.0444, "lng": 31.2357 },
          zoom: 14
        })
          // ceate information window 
        var infoWindow = new window.google.maps.InfoWindow()
        // loop throw each venue use foreach to display dynamic markers
        this.state.locations.forEach((location, i) => {
          //make new marker
          var marker = new window.google.maps.Marker({
            // display the locations
            position: this.state.locations[i].location,
            map: map,
            title: this.state.locations[i].name
          })
          // fetch and store loctions
        const x = this.state.locations[i].latlong
          // fetch data use foursquare APLI 3rd party
        axios.get(`https://api.foursquare.com/v2/venues/search?ll=${x}&limit=1&client_id=YKMMQBCQEIR5PSIEIADJMQY4PWZVJAA035MMNN0KQINCS13P&client_secret=2E5JADXJRUMOEQK2XBBCAZ3LYZSBJ2KFC1MW234KUJODTNU2&v=20180827`).then(response => {
          //display important informations about every loctions
        var locationInfo = `<div class="info-window"><h3 class="info-window-heading">${response.data.response.venues[0].name}<div class="info-window-content"></h3><p>${response.data.response.venues[0].name}</p><p>${response.data.response.venues[0].location.formattedAddress}</p><p class="foursquare-attribution">Fetched from Foursquare</p></div></div>`;
        
          // pushing markers using .push method
        markers.push(marker);
          // event listnener that handle click to open info from marker
        marker.addListener('click', function () {
              infoWindow.setContent(locationInfo)
              // open info!
              infoWindow.open(map, marker)
            })
            // thow error if foursquare failed to load
          }).catch(error => {
            alert('Foursquare is failed to load!')
          })
        })
        }
         // create function that handle filter the search results for list and markers
        filterLocations = (query) => {
          const { locations, markers } = this.state
          this.setState({ query })
          if (query) {
            markers.forEach((marker) => {
              marker.setVisible(false)
            })
            const match = new RegExp(escapeRegExp(query), 'i')
            this.setState({
              filteredPlaces: locations.filter((loc) => match.test(loc.name)),
              searchedMarkers: markers.filter((marker) => match.test(marker.title))
                .forEach((marker) => marker.setVisible(true))
            })
          } else {
            if (markers) {
              markers.forEach((marker) => {
                marker.setVisible(true)
              })
            }
            this.setState({ filteredPlaces: locations })
          }
      }
      
    
    render() {
        return(
            <div className="map">
            <Searchbar
            query={this.state.query}
            searchedMarkers={this.state.searchedMarkers}
            filteredPlaces={this.state.filteredPlaces}
            markers={this.state.markers}
            location={this.state.locations}
            searched={this.filterLocations.bind(this)}
            />
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