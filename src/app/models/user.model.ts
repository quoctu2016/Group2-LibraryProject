import { BBOM } from "./BBOM.model";

export class User{
    MemberCode: number;
    MemberName: string;
    IdentificationNumber: number;
    Phone: number ;
    Email: string;
    ListApiBookBorrowOfMember:BBOM[];
}