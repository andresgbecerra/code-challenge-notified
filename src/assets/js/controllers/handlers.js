import {
    form1,
    form2,
    inputElement1,
    inputElement2,
    pElement,
    spanElement,
} from "../constants";
import { setValues, setCompress, setDecompress } from "../services";

var items = [];

const onCompress = (event) => {
    event.preventDefault();
    const value = inputElement1.value;
    if (value.length <= 1) return;
    items = [...value.trim().replace(/\s+/g, '')];
    setValues(items);
    pElement.innerText = setCompress(items);
};

const onDeCompress = (event) => {
    event.preventDefault();
    const value = inputElement2.value;
    if (value.length <= 1) return;
    items = [...value.trim().replace(/\s+/g, '')];
    setValues(items);
    pElement.innerText = setDecompress(items);
    spanElement.innerText = '';
};

const onReset = () => {
    inputElement1.value = '';
    inputElement2.value = '';
    pElement.innerText = '...';
    spanElement.innerText = '';
};

window.onReset = onReset;

form1.addEventListener('submit', onCompress);
form2.addEventListener('submit', onDeCompress);