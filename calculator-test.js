//I want to be able to pass in values into the test

describe("monthly rate calculation tests", function(){
  it('should calculate the monthly rate correctly', function() {
    let values = {amount: 5000, years: 10, rate: 4.5}
    expect(calculateMonthlyPayment(values)).toEqual("51.82");
  })
  it('should calculate the monthly rate correctly', function(){
    let values = {amount: 10000, years: 5, rate: 3.2}
    expect(calculateMonthlyPayment(values)).toEqual("180.58")
  })
})

// const values = {amount: 10000, years: 10, rate: 4.5 }
// const amountInput = document.getElementById("loan-amount");
// amountInput.value = values.amount;
// const yearsInput = document.getElementById("loan-years");
// yearsInput.value = values.years
// const rateInput = document.getElementById("loan-rate")
// rateInput.value = values.rate

it("should return a result with 2 decimal places", function() {
  let values = {amount: 5000, years: 10, rate: 4.5}
  expect(calculateMonthlyPayment(values)).toContain(".")
  //I'm not sure how to do this but I will keep looking up documentation
});

describe("invalid inputs", function(){
  it('should reject invalid input ', function(){
    expect(() => setUpInitialValues("dfasfasf")).toThrowError();
    expect(() => setUpInitialValues(" ")).toThrowError();
  })
})


// it('should update current values', function(){
//   expect(currentUIValues/toEqual(getcurrentUIValues());
// })

