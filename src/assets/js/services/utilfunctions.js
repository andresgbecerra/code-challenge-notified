import { spanElement, letters, integers } from '../constants';
import { hasNext, next, current } from ".";


export const setMessage = (arr, items) => {
    if (arr.length < items.length) {
        spanElement.innerText = 'Compressed!!';
        spanElement.style.color = "green";
    } else {
        spanElement.innerText = 'Not Compressed';
        spanElement.style.color = "red";
    }
};


export const setCompress = (items) => {
    let charts = [];
    let result;
    let arr = [];

    items.forEach((item) => {
        charts = items.filter(c => c === item);
        result = charts.length == 1 ? item : item + charts.length;
        if (hasNext()) {
            if (current() !== next()) arr.push(result);
        } else {
            arr.push(result);
        }
    });

    //const text = [...new Set(arr)].join('');
    setMessage(arr, items);
    const text = arr.join('');
    return text;

};


export const setDecompress = (items) => {

    let charts = [];
    let arr = [];
    let factor = 0;

    for (let i = 0; i < items.length; i++) {
        charts = items.filter(c => c === current());
        if (charts.length > 2) {
            arr = items;
            break;
        }
        if ((letters.test(items[i])) && (integers.test(items[i + 1])) && hasNext()) {
            factor = Number(items[i + 1]);
            for (let j = 0; j < Number(items[i + 1]); j++) {
                arr.push(items[i]);
            }
        } else if ((letters.test(items[i])) && (letters.test(items[i + 1])) && hasNext()) {
            arr.push(items[i]);
        } else if ((integers.test(items[i])) && (letters.test(items[i + 1])) && hasNext()) {
            arr.push(items[i]);
        } else if ((integers.test(items[i])) && (integers.test(items[i + 1])) && hasNext() && factor != Number(items[i])) {
            factor = Number(items[i + 1]);
            for (let r = 0; r < Number(items[i + 1]); r++) {
                arr.push(items[i]);
            }
        }

    }

    const text = arr.join('');
    return text;

};