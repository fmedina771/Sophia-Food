 function initMap() {


        var styledMapType = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#DAC6B2'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#E0E2E6'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#ba8902'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ba8902'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#ba8902'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#ba8902'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: 'BBC3E1'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: 'BBC3E1'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#DAC6B2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            {name: 'Styled Map'});

        // Create a map object, and include the MapTypeId to add
        // to the map type control.

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.678, lng: -73.944},
          zoom: 13,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          },
        });


  var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
  var beerdMarker = new google.maps.Marker({
    position: {lat: 40.678, lng: -73.944},
    map: map,
    icon: image

  });

        //Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');


        //latlng : Latitude: 40.72173, Longitude: -73.95805
        //mock up of adding lat long to create a new marker on The map
        function addMark(){
              var myLatlng = new google.maps.LatLng(40.678,-73.994);
              var mapOptions = {
                zoom: 13,
                center: myLatlng
              }

              var map = new google.maps.Map(document.getElementById("map"), mapOptions);



              var image = 'https://funduval.files.wordpress.com/2017/05/beer-stein-marker1.png'
              for (var i = 0; i < bars.length; i++) {
                var bar = bars[i];
                var multiMarker = new google.maps.Marker({
                  position: {lat: bar[1], lng: bar[2]},
                  map: map,
                  icon: image,

                });
              }

              // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }//end addMark()
        addMark();

          // To add the marker to the map, call setMap();
              multiMarker.setMap(map);
              //Associate the styled map with the MapTypeId and set it to display.
              map.mapTypes.set('styled_map', styledMapType);
              map.setMapTypeId('styled_map');
        }
// });
}//end initMap


