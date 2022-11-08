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
    let recordsSum : Array<RecordSum> = [];

    for (let record of records) {
        recordsSum.push({category: record.category, totalAmount: record.amount});
    }
    return recordsSum;
}