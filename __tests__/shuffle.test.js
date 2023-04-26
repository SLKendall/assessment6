const shuffle = require("../src/shuffle");


describe("shuffle should...", () => {
  
  test("Check that returned result is an array", () => {
    
  let testArray = [1,2,3,4,5]
  let result = shuffle(testArray)

    expect(Array.isArray(result)).toEqual(true)
  })

  test('Check that returned array is equal in length to inputted array', () => {
    let testArray = [1,2,3,4,5]
    let result = shuffle(testArray)

    expect(result.length).toBe(testArray.length)
  })
  
});
