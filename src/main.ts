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

    if (records.length > 0)
        recordsSum.push({category: records[0].category, totalAmount: records[0].amount});
    return recordsSum;
}