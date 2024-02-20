export interface WikiItems {
    data: { [key: string]: Datum };
}

export interface Datum {
    high?: number | null;
    highTime?: number | null;
    low?: number | null;
    lowTime?: number | null;
}