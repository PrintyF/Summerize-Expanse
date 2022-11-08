interface Record {
    expense : Date,
    category: string,
    amount: number
}

interface RecordSum {
    category: string,
    totalAmount: number
}

export function summerize(records: Array<Record>): Array<RecordSum> {
    return [];
}