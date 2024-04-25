let count = 0;
const increaseM = () => ++count;
const getCountM = () => console.log(count);
const restM = () => {
    count = 0;
    return count;
}

exports.increaseM = increaseM;
exports.getCountM = getCountM;
exports.restM = restM;