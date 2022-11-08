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

    for (let i = 0; i < records.length; i++) {
        sums.push({category: records[i].category, totalAmount: records[i].amount});
    }

    for (let i = 0; i < sums.length - 1; i++) {
        if (sums[i].category === sums[i + 1].category) {
            sums[i].totalAmount += sums[i + 1].totalAmount;
            sums.splice(i + 1, 1);
            i = -1;
        }
    }

    return sums;
}