const { default: axios } = require("axios");
const { error } = require("console");

function sum(num1, num2) {
    return num1 + num2
}

function fetchUser() {
    axios.get('https://jsonplaceholder.typicode.com/Users/1')
    .then(res => res.data)
    .catch(err => 'error')
}

module.exports = sum, fetchUser;