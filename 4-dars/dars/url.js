import url from "node:url";

const URL = "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash";

const parsedURL = url.parse(URL)
console.log(parsedURL);
console.log(parsedURL.protocol);
console.log(parsedURL.auth);



