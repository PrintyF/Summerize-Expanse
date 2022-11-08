import {Record, RecordSum, summerize} from '../src/main'

describe('Summerize', ()=> {

    it('Test with an empty list', () => {
        expect(summerize([])).toEqual([]);
    });

    describe('Test with one category', () => {
        let recordsTest: Array<Record> = [];
        let recordsSumResponse: Array<RecordSum> = [];
        beforeEach(() => {
            recordsTest = [];
            recordsSumResponse = [];
        })


        it('Test with one item in list', () => {
            recordsTest.push({amount: 10,category: 'home',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 10,category: 'home'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

        it('Test with a different item in list', () => {
            recordsTest.push({amount: 10,category: 'cinema',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 10,category: 'cinema'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

    })

    it.todo('sorted by category');

    it.todo('If the amount for a category is zero, this category should not appear in the output.');

    it.todo('Print output total per category per month.');

    it.todo('Print total per category per month for a given category.');

    it.todo('Print total per category for all (non zero) categories for a given month.');

})