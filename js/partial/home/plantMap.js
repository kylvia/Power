define(function(){
    return plantMap
});
var plantMap = {
    Render:function () {

        this.getLocation();

    },

    getLocation:function () {
        var _this = this;
        $.ajax({
            url:'/interface/getPlantPosition',
            method:'post',
            type:'json',
            data:JSON.stringify({token:Cookies.getCook('token')}),
            success:function (result) {
                if(result.success){
                    _this.setMap(result.data.loaction.reverse())
                }else {
                    App.alert(result.msg);
                }
            },
            error:function (e) {
                console.log(e)
            }
        })
    },
    setMap:function (center) {
        var _this = this;
        require(['MapUtil'],function (MapUtil) {
            var map = L.map('plantMap', {
                center: center || [],
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
    }
}