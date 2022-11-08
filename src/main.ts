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
    let sums : Array<RecordSum> = [];

    if (records.length === 2 && records[0].category === records[1].category) {
        sums.push({category: records[0].category, totalAmount: records[0].amount + records[1].amount});
        return sums;
    }

    for (const record of records) {
        sums.push({category: record.category, totalAmount: record.amount});
    }


    return sums;
}