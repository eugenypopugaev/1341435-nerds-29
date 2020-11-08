ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.939287346934364,30.319933535690303],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search',

        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([59.938784, 30.32312], {
            hintContent: "",
            balloonContent: "",
            iconContent: ""
        }, {

            iconLayout: "default#image",
            iconImageHref: "img/map-marker.png",
            iconImageSize: [231, 190],
            iconImageOffset: [-50, -200],

            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects

        .add(myPlacemarkWithContent);

        myMap.behaviors.disable('scrollZoom'); 
});