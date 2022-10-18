/* eslint-disable no-undef */
import { setDebounce } from './debounce.js';

const addressInput = document.querySelector('.js-input-address');
let myMap;

export const initMap = () => {
  const geolocation = ymaps.geolocation;

  geolocation
    .get({
      provider: 'yandex',
      mapStateAutoApply: true,
    })
    .then(function (result) {
      let city = result.geoObjects.position;

      myMap = new ymaps.Map(map, {
        center: [city[0], city[1]],
        zoom: 10,
      });

      myMap.controls.remove('default');
    });
};

export const onSearchInput = (evt) => {
  const value = evt.target.value;

  if (value) {
    myMap.geoObjects.removeAll();

    let myGeocoder = ymaps.geocode(`Россия, ${value}`);

    myGeocoder.then(function (res) {
      myMap.geoObjects.add(res.geoObjects);
      myMap.setCenter(res.geoObjects.get(0).geometry.getCoordinates());
      myMap.setZoom(17);
    });
  }
};

addressInput.addEventListener('input', setDebounce(onSearchInput));
