describe('Calculator input tests' , function(){
  it('should calculate the monthly rate correctly', function() {
    // ...
    const values = {
      amount: 200,
      years: 2,
      rate: 10
    };
    expect(calculateMonthlyPayment(values)).toEqual('9.23');
  });

  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 1500,
      years: 4,
      rate: 7.2
    };
    expect(calculateMonthlyPayment(values)).toEqual('36.06');
  });
  
  it("should return the correct loan amount element",
   function(){
    const values = {
      amount: 50000,
      years: 8,
      rate: 5.9
    };
    expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
  });
  }
)



  /// etc
  //used https://www.calculator.net/loan-calculator.html as well as double checking on paper to verify output

