describe('helpers testing for tip calculation',     function(){

    beforeEach(function (){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
     });

     it('should sum total tip amount of all payments on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
    
        submitPaymentInfo();
    
        expect(sumPaymentTotal('tipAmt')).toEqual(60);
      });
      
      it('should sum tip percent of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 23)).toEqual(23);
        expect(calculateTipPercent(111, 11)).toEqual(10);
      });

      afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });
    }
      
      
)