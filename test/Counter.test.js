// import Counter from "../Counter";
const Counter = require('../Counter')
test('Checking increment function', () => {
    const component = render(<Counter/>)
    console.log(component)
});