define(function(){
    return plantMap
});
var plantMap = {
    Render:function () {
        var map = L.map('plantMap',{
            zoomControl:false
        }).setView([30.579999,104.068081], 13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

       /* L.marker([30.579999,104.068081]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();*/

        /*var marker = L.markerClusterGroup({
            iconCreateFunction: function(cluster) {
                return L.divIcon({ html: '<b>' + cluster.getChildCount() + '</b>' });
            }
        });*/
        function getRandomLatLng(map){
            return L.latLng(30.579999,104.068081);
        }
        console.log(L.markerClusterGroup);
        var markers = L.markerClusterGroup();
        markers.addLayer(L.marker(getRandomLatLng(map)));
        map.addLayer(markers);
    }
}