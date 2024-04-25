// const increaseM = require('./counter.cjs');
// increaseM.increaseM();
// increaseM.getCountM();
// console.log(increaseM.restM());



const iifeCounterModule = (() => {
    let count = 0;
    return {
        increase: () => count++,
        getCount: () => console.log(count),
        reset: () => {
            count = 0;
            console.log("Count reset qilindi!");
        },
    };
})();

iifeCounterModule.increase();
iifeCounterModule.getCount();
iifeCounterModule.reset();



// console.log(process.env.pwd);


// console.log(__dirname);
// console.log(__filename);






const url = new URL("https://najottalim.uz");
console.log(url);
url.username = "Amirbek"
url.password = "amirbek"
url.port = 1000
url.pathname ="pathname"
url.hash = "Hash"
url.searchParams.set("backend course", "exspress")
console.log(url);