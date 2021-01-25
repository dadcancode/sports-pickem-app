export const getPercent = (correct, total) => {
    console.log(correct)
    console.log(total)
    console.log((correct/total) * 100)
    return ((correct/total)*100).toFixed(2);
}