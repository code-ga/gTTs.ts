export default gToken;
declare function gToken(text: string): string;
declare class gToken {
    constructor(text: string);
    SALT_1: string;
    SALT_2: string;
    token_key: number;
}
