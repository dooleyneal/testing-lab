const {returnTwo, greeting, add} = require(`./functions.js`)

test(`should return 2`, () => {
    expect(returnTwo()).toBe(2)
})

describe(`greeting tests`, () => {
    test(`greeting('James')`, () => {
        expect(greeting('James')).toBe('Hello James')
    }),

    test(`greeting('James')`, () => {
        expect(greeting('Jill')).toBe('Hello Jill')
    })
})

describe(`add tests`, () => {
    test(`add(1,2)`, () => {
        expect(add(1, 2)).toBe(3)
    }),

    test(`add(5,9)`, () => {
        expect(add(5, 9)).toBe(14)
    })
})