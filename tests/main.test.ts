import {Record, RecordSum, summerize} from '../src/main'

describe('Summerize', ()=> {
    let recordsTest: Array<Record> = [];
    let recordsSumResponse: Array<RecordSum> = [];

    it('an empty list', () => {
        expect(summerize([])).toEqual([]);
    });

    beforeEach(() => {
        recordsTest = [];
        recordsSumResponse = [];
    })

    describe('Tests with one item in list', () => {


        it('one item in list', () => {
            recordsTest.push({amount: 10,category: 'home',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 10,category: 'home'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

        it('a different item in list', () => {
            recordsTest.push({amount: 10,category: 'cinema',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 10,category: 'cinema'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

        it('a third different item in list', () => {
            recordsTest.push({amount: 15,category: 'school',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 15,category: 'school'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

    })

    describe('Tests with more than one item in list with each there own category', ()=> {

        it('two items in list', () => {
            recordsTest.push({amount: 10, category: 'home',dateOfexpense: new Date()});
            recordsTest.push({amount: 10, category: 'school',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 10,category: 'home'});
            recordsSumResponse.push({totalAmount: 10,category: 'school'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

        it('three items in list', () => {
            recordsTest.push({amount: 10, category: 'home',dateOfexpense: new Date()});
            recordsTest.push({amount: 10, category: 'school',dateOfexpense: new Date()});
            recordsTest.push({amount: 15, category: 'food',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 10,category: 'home'});
            recordsSumResponse.push({totalAmount: 10,category: 'school'});
            recordsSumResponse.push({totalAmount: 15,category: 'food'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

    });

    describe('Tests with more than one item in list with one category', ()=> {
        it('two items in list', () => {
            recordsTest.push({amount: 10, category: 'home',dateOfexpense: new Date()});
            recordsTest.push({amount: 10, category: 'home',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 20,category: 'home'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

        it('three items in list', () => {
            recordsTest.push({amount: 10, category: 'home',dateOfexpense: new Date()});
            recordsTest.push({amount: 10, category: 'home',dateOfexpense: new Date()});
            recordsTest.push({amount: 15, category: 'home',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 35,category: 'home'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

        it('four items in list', () => {
            recordsTest.push({amount: 10, category: 'home',dateOfexpense: new Date()});
            recordsTest.push({amount: 10, category: 'home',dateOfexpense: new Date()});
            recordsTest.push({amount: 15, category: 'home',dateOfexpense: new Date()});
            recordsTest.push({amount: 15, category: 'home',dateOfexpense: new Date()});
            recordsSumResponse.push({totalAmount: 50,category: 'home'});
            expect(summerize(recordsTest)).toEqual(recordsSumResponse);
        });

    });

   it.todo('sorted by category');

    it.todo('If the amount for a category is zero, this category should not appear in the output.');

    it.todo('Print output total per category per month.');

    it.todo('Print total per category per month for a given category.');

    it.todo('Print total per category for all (non zero) categories for a given month.');

})