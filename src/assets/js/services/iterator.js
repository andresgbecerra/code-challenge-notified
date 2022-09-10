var obj = {
    index: 0,
    items: []
};


export function setValues(items = []) {
    obj.index = 0;
    obj.items = items;
}

export function first() {
    let [first] = obj.items;
    return first;
}

export function last() {
    let [last] = [...obj.items].reverse();
    return last;
}

export function hasNext() {
    return obj.index < obj.items.length - 1;
}

export function current() {
    return obj.items[obj.index];
}

export function next() {
    if (hasNext()) {
        obj.index += 1;
    }
    return current();
}

export function prev() {
    if (obj.index !== 0) {
        obj.index -= 1;
    }
    return current();
}