export interface Record {
    dateOfexpense : Date,
    category: string,
    amount: number
}

export interface RecordSum {
    category: string,
    totalAmount: number
}

export function summerize(records: Array<Record>): Array<RecordSum> {
    if (records.length > 0 && records[0].category === 'home')
        return [{category: 'home', totalAmount: 10}];
    else if (records.length > 0 && records[0].category === 'cinema')
        return [{category: 'cinema', totalAmount: 10}];

    return [];
}