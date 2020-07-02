describe('Donuts testing:', function(){
    let underTest; 

    beforeEach( function(){
        underTest = new Donut();
    })

    describe('Donuts should increase:', function(){

        describe('Adding a donut', function(){

            it('count should increase by 10', function(){
                underTest.addDonut();
                
                expect(underTest.getCount()).toBe(10);
            })
        })

    })
    
    describe('Donuts should decrease:', function(){

        describe('Removing a donut', function(){

            it('count should decrease by 10', function(){
                underTest.removeDonut();
                expect(underTest.getCount()).toBe(1);
            })
        })

    })


})