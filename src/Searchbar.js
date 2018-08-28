import React, { Component } from 'react'

class Searchbar extends Component {

  /** 
   * use foreach method to handle a click
   * when the user press the marker that display
   * and active loctions markers
  */
  activation (locationName) {
    const { markers } = this.props
    markers.forEach((marker) => {
      if(marker.title === locationName) {
        window.google.maps.event.trigger(marker, 'click')
      }else {
        window.google.maps.event.trigger(marker, '')
      }
    })
}
    render() {
    const { query, searched, filteredPlaces } = this.props
    return (
        <div
        className="sidemenu"
        aria-label='sidemenu'
        role='menu'>
        <div
        className="search"
        aria-label='searchbox'
        tabIndex='0'>
          <input
            type="text"
            placeholder="Looking for cafes"
            value={query}
            onChange={(e) => searched(e.target.value)}
          />
        </div>
        <div
        className="ListView"
        aria-label='list of all cafes'>
        <ul>
          {filteredPlaces.map((location, index) => (
            <li key={index}><button onClick={() => this.activation(location.name)} aria-label='cafe buttons'>{location.name}</button></li>
          ))}
        </ul>
      </div>
</div>
  )
    }
}

export default Searchbar