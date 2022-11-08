
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
    let sums : {[key: string]: number} = {};
    for (let i = 0; i < records.length; i++) {
        if (sums[records[i].category])
            sums[records[i].category] += records[i].amount;
        else
            sums[records[i].category] = records[i].amount;
    }
    let resp: Array<RecordSum> = [];
    for (let sumsKey in sums) {
        resp.push({category: sumsKey, totalAmount: sums[sumsKey]});
    }
    return resp;
}