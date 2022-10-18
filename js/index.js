/* eslint-disable no-undef */

import { initMap } from './components/map.js';
import { inputInit } from './components/input.js';
import { initForm } from './components/form.js';
import './components/select.js';

// анимирование плейсохлдера у инпута
inputInit();

// форма
initForm();

// карта
ymaps.ready(initMap);
