
var map;

//initMap() called when Google Maps API code is loaded - when web page is opened/refreshed 
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
        mapTypeId: 'terrain' // can be any valid type
    });
}

var thelocation;
var titleName;
function load1() {
    $(document).ready(function () {

        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_hour.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load2() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load3() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_hour.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load4() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_hour.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load5() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load6() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_day.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load7() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load8() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load9() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load10() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load11() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load12() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load13() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load14() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load15() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load16() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load17() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load18() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load19() {
    $(document).ready(function () {
            
        // Set Google map  to its start state
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
            mapTypeId: 'terrain' // can be any valid type
        });
        // The following uses JQuery library
        $.ajax({
            // The URL of the specific data required
            url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson",

            // Called if there is a problem loading the data
            error: function () {
                $('#info').html('<p>An error has occurred</p>');
            },

            // Called when the data has succesfully loaded
            success: function (data) {
                i = 0;
                var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                $.each(data.features, function (key, val) {
                    // Get the lat and lng data for use in the markers
                    var coords = val.geometry.coordinates;
                    var latLng = new google.maps.LatLng(coords[1], coords[0]);
                    // Now create a new marker on the map
                    var marker = new google.maps.Marker({
                        position: latLng,
                        map: map,
                        label: val.properties.mag.toString() // Whatever label you like. This one is the magnitude of the earthquake
                    });
                    // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                    markers[i++] = marker; // Add the marker to array to be used by clusterer
                });
                var markerCluster = new MarkerClusterer(map, markers,
                    { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
            }
        });
    });
}

function load20() {
    $(document).ready(function () {

            // Set Google map  to its start state
            map = new google.maps.Map(document.getElementById('map'), {
                zoom: 2,
                center: new google.maps.LatLng(2.8, -187.3), // Center Map. Set this to any location that you like
                mapTypeId: 'terrain' // can be any valid type
            });
            // The following uses JQuery library
            $.ajax({
                // The URL of the specific data required
                url: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson",

                // Called if there is a problem loading the data
                error: function () {
                    $('#info').html('<p>An error has occurred</p>');
                },
                // Called when the data has succesfully loaded
                success: function (data) {
                    i = 0;
                    var markers = []; // keep an array of Google Maps markers, to be used by the Google Maps clusterer
                    $.each(data.features, function (key, val) {
                        // Get the lat and lng data for use in the markers
                        var coords = val.geometry.coordinates;
                        var latLng = new google.maps.LatLng(coords[1], coords[0]);
                        // Now create a new marker on the map
                        var marker = new google.maps.Marker({
                            position: latLng,
                            map: map
                        });
                        // Form a string that holds desired marker infoWindow content. The infoWindow will pop up when you click on a marker on the map
                    var infowindow = new google.maps.InfoWindow({
                        content: "<h3>" + val.properties.title + "</h3><p><a href='" + val.properties.url + "'>Details</a></p>"
                    });
                    marker.addListener('click', function (data) {
                        infowindow.open(map, marker); // Open the Google maps marker infoWindow
                    });
                        markers[i++] = marker; // Add the marker to array to be used by clusterer
                    });
                    var markerCluster = new MarkerClusterer(map, markers,
                        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
                }
            });
        });
}