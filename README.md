# Neighborhood Map
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Yuribenjamin/neighborhood-map/blob/master/LICENSE)

Udacity's Google Developer Challenger Scholarship - Front End Web Development

```
    [+] AUTOR:      Ibrahim Ragab
    [+] EMAIL:      Abrahammoustafa@hotmail.co.uk
    [+] Github:     https://github.com/Yuribenjamin
    [+] twitter:    @AbrahamRagab

```

## Summary
This project is a final project in Udacity's Google Developer Challenger Scholarship - Front End Web Development, also the part of Udacity's React Fundamentals course, that display a map for various locations to coffe cafes in cairo, egypt where you get your best coffee, the project is a single page app using react framework and this map has a several functionalities, like highlighted locations, third-party data about loctions and more.


## How to run the project

To get started developing right away:

1. Download or clone with this repository in your machine using the the following URL

> `https://github.com/Yuribenjamin/neighborhood-map.git`

- Then :

* install all project dependencies with `npm install`
* start the development server with `npm start`

Or :

* install all project dependencies with `yarn install`
* start the development server with `yarn start`

2. Note :

The service worker is only implemented during production build mode!

## Dependencies

- [create-react-app](https://github.com/facebook/create-react-app)
- [Google APIs](https://console.developers.google.com/)
- [Google maps API](https://developers.google.com/maps/documentation/javascript/tutorial)
- [Foursquare Developers](https://developer.foursquare.com/)
- [Axios](https://github.com/axios/axios)
- Presentation by [Yahya Elharony](https://www.youtube.com/watch?v=ywdxLNjhBYw&list=PLgOB68PvvmWCGNn8UMTpcfQEiITzxEEA1)


## Project Specification

1. **Interface Design**
  - Responsiveness :
    - All application components render on-screen in a responsive manner
  - Usability :
    - All application components are usable across modern desktop, tablet, and phone browsers
2. **Application Functionality**
  - Location Filter :
    - Includes a text input field or drop down menu that filters the map markers and list items to locations matching the text input or selection. Filter function runs error-free
  - List View :
    - A list-view of location names is provided which displays all locations by default, and displays the filtered subset of locations when a filter is applied
    - Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)
    - List functionality is responsive and runs error free
  - Map and Markers :
    - Map displays all location markers by default, and displays the filtered subset of location markers when a filter is applied
    - Clicking a marker displays unique information about a location somewhere on the page (modal, separate div, inside an info Window)
    - Any additional custom functionality provided in the app functions error-free
3. **Asynchronous Data Usage**
  - Asynchronous API Requests :
    - Application utilizes the Google Maps API or another mapping system and at least one non-Google third-party API. Refer to this documentation
    - All data requests are retrieved in an asynchronous manner using either the Fetch API or XMLHttpRequest
  - Error Handling :
    - Data requests that fail are handled gracefully using common fallback techniques (i.e. AJAX error or fail methods). 'Gracefully' means the user isn’t left wondering why a component isn’t working. If an API doesn’t load there should be some visible indication on the page that it didn’t load.
4. **Documentation**
  - READ ME :
    - A READ ME file is included detailing all steps required to successfully run the application
  - Comments :
    - Comments are present and effectively explain longer code procedures
5. **Location Details Functionality**
  - Additional Location Data :
    - Functionality providing additional data about a location is provided and sourced from a 3rd party API. Information can be provided either in the marker’s info Window, or in an HTML element in the DOM (a sidebar, the list view, a modal, etc.)
    - Provide attribution for the source of additional data. For example, if using Foursquare, indicate somewhere in your UI and in your README that you are using Foursquare data
  - Error Free :
    - Application runs without console errors
  - Usability :
    - Functionality is presented in a usable and responsive manner
6. **Accessibility**
  - Focus :
    - Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus
  - Site elements are defined semantically :
    - Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.
  - Accessible Images :
    - All content-related images include appropriate alternate text that clearly describes the content of the image.
7. **Offline Use**
  - Service Worker
    - When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access
8. **Application Architecture**
  - Proper Use of React :
    - React code follows a reasonable component structure.
    - State control is managed appropriately: event handlers are passed as props to child components, and state is managed by parent component functions when appropriate
    - There are at least 5 locations in the model. These may be hard-coded or retrieved from a data API
    - There are no errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly


## Licence
The contents of this repository are covered under the [MIT License](https://rem.mit-license.org/).