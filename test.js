var expect = chai.expect;

describe('PATR', function(){

        describe('#calcScore()', function(){
            it('should return 4 for 5 dots', function(){
                expect(calcScore([5])).to.equal(4);
                })
            it('should return 2 for 3 dots', function(){
                expect(calcScore([3])).to.equal(2);
                })
            it('should return 0 for 1,2,4,6 dots', function(){
                expect(calcScore([1,2,4,6])).to.equal(0);
                })
            })

        describe('#displayResult()', function(){
            it('should say correct for correct answer', function(){
                expect(displayResult(4, [5])).to.equal('You are right!');
                })
            it('should show correct result for incorrect answer', function(){
                expect(displayResult(3, [5])).to.equal('Oops! It should be '+calcScore([5]));
                })

            })

})
