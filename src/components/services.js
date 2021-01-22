export const randomIndex = (arr) => {
    let index = Math.floor(Math.random() * arr.length);

    return index
}

export const getTwoDiff = (arr) => {
    let temp = arr;
    let random1 = temp.splice(randomIndex(temp), 1);
    let random2 = temp.splice(randomIndex(temp), 1);
    return [random1[0], random2[0]]
}