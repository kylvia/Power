define(function(){
    return rmIndex
});
var rmIndex = {
    Render:function () {

        require(['leaflet'],function () {
            var map = L.map('reportManagement').setView([51.505, -0.09], 13);

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker([51.5, -0.09]).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();
        })


        /* L.marker([30.579999,104.068081]).addTo(map)
         .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
         .openPopup();*/

        /*var marker = L.markerClusterGroup({
         iconCreateFunction: function(cluster) {
         return L.divIcon({ html: '<b>' + cluster.getChildCount() + '</b>' });
         }
         });*/

    }
}