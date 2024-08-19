function initialize(tbLat, tbLng, z, callback) {
    $('.popUpContent2').html("<div style='line-height:20px; font-weight:bold'>Use marker to precisly set the location.</div><div id='map' style='width: 856px; height: 350px; border: solid 2px #CCC;'></div><div id='newLocationPreview' style='display:flex;width:100%;'></div></div>");
    $('.PopUp2').show();
    var lat = (tbLat.val() == "" ? 43.653226 : parseFloat(tbLat.val()));
    var lng = (tbLng.val() == "" ? -79.38318429999998 : parseFloat(tbLng.val()));
    var myLatlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
        center: myLatlng,
        zoom: z,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"),
        myOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP, // BOUNCE
        title: "My Location"
    });

    tbLat.val(marker.position.lat());
    tbLng.val(marker.position.lng());

    google.maps.event.addListener(marker, 'dragend', function (result) {
        if (callback) {
            callback(marker.position.lat(), marker.position.lng());
        } else {
            tbLat.val(marker.position.lat()),
            tbLng.val(marker.position.lng())
        }
    });
}

function parceAddress(geocoderResult) {
    return geocoderResult.address_components.reduce(
        function (acc, item) {
            if (item.types.includes('postal_code')) acc.postalCode = item.long_name;
            if (item.types.includes('street_address')) acc.streetAddress = item.long_name;

            if (item.types.includes('locality') || item.types.includes('administrative_area_level_3')) {
                acc.city = item.long_name;
            }
            return acc;
        },
        {
            streetAddress: geocoderResult.formatted_address,
            postalCode: '',
            city: '',
        });
}

function getAddressFromCoord(lat, lng, callback, tbLat, tbLang) {
    const latlng = {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
    };
    const geocoder = new google.maps.Geocoder();

    geocoder
        .geocode({ location: latlng })
        .then((response) => {
            if (response.results[0]) {
                $('#newLocationPreview').html(
                    "<span style='margin-top: 8px'>" + response.results[0].formatted_address + "</span>"
                    + "<button id='mapSaveCoordinates' type='button' class='button' style='margin: 8px 0 0 auto'>Save new address</button>");
                $('#mapSaveCoordinates').on('click', function () {
                    tbLat.val(lat);
                    tbLang.val(lng);
                    callback(parceAddress(response.results[0]));
                    HidePopUp2();
                });
            } else {
                ShowNotification("<i class='icon-info-sign'></i> No results found. Please select location manually", "yellowNotification");
            }
        })
        .catch((e) => ShowNotification("<i class='icon-minus-sign'></i> Geocoder failed due to: " + e, "redNotification"));
}
function GetCoordinatesFromAddress(address, callback, tbLat, tbLang) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address },
        function (result, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                SetCoordinates(result, status, callback, tbLat, tbLang);
            } else {
                callback();
                //ShowNotification("<i class='icon-info-sign'></i> No results found. Please select location manually", "yellowNotification");
            }
        }
    );
}
function SetCoordinates(result, status, handler, tbLat, tbLang) {
    tbLat.val(result[0].geometry.location.lat());
    tbLang.val(result[0].geometry.location.lng());
        if (handler)
            handler();
}

function concateAddress(streetAddress, city, code) {
    if (streetAddress.length <= 1 || !city || code.length <= 1 || city === 'Select city') {
        return '';
    } else {
        return streetAddress + ' ' + city + ' ' + code;
    }
}
