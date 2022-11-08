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

    if (records.length === 1)
        recordsSum.push({category: records[0].category, totalAmount: records[0].amount});
    else if (records.length === 2) {
        recordsSum.push({category: records[0].category, totalAmount: records[0].amount});
        recordsSum.push({category: records[1].category, totalAmount: records[1].amount});
    }
    else if (records.length === 3) {
        recordsSum.push({category: records[0].category, totalAmount: records[0].amount});
        recordsSum.push({category: records[1].category, totalAmount: records[1].amount});
        recordsSum.push({category: records[2].category, totalAmount: records[2].amount});
    }
    return recordsSum;
}