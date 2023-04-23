// test 1+2 = 3 

describe('basic numeric operations', () => {
    it('1 + 2 is 3', () => {
        expect(1+2).toBe(3)
    })
    it("3 + 10 is 13", () => {
        expect(3+10).toBe(13)
    })
    it('20 - 10 is 10', () => {
        expect(20-10).toBe(10)
    })
})

describe("zero devision will throw an error", () => {
    
    it('20 / 0 is Infinity', () => {
        expect(20/0).toBe(Infinity)
    })
    it('10 / 0 Infinity ', () => {
        expect(10/0).toBe(Infinity)
    })
    it('0 / 0 is NaN', () => {
        expect(0/0).toBeNaN()
    })
    it('MaN is NaN', () => {
        expect(NaN).toBeNaN()
    })
    }   
)
