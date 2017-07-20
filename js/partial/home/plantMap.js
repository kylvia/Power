define(function(){
    return plantMap
});
var plantMap = {
    Render:function () {

        require(['MapUtil'],function (MapUtil) {
            var map = L.map('plantMap', {
                center: [30.579999,104.068081],
                zoomControl:false,
                attributionControl:false,
                zoom: 8
            });
            L.tileLayer.provider('Google.Satellite.Map').addTo(map);
            function getRandomLatLng(map){
                return L.latLng(30.579999,104.068081);
            }
            var markers = L.markerClusterGroup();
            markers.addLayer(L.marker(getRandomLatLng(map)));
            map.addLayer(markers);
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