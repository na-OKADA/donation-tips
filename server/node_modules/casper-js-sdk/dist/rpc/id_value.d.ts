export declare class IDValue {
    intValue: number | null;
    strValue: string | null;
    isIntValue: boolean;
    constructor(value: string | number);
    static fromString(value: string): IDValue;
    static fromInt(value: number): IDValue;
    toString(): string;
    toInt(): number;
    toJSON(): string;
    static fromJSON(data: string | number): IDValue;
}
