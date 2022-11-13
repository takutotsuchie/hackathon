export type User = {
    UserId :string,
    Name: string,
    UserPoint: number,
}
export type Message = {
    MessageId:string,
    FromUserId:string,
    ToUserId:string,
    MessagePoint: number,
    MessageText:string,
}

export type UserMessage = {
    MessageId:string,
    FromUserId:string,
    ToUserId:string,
    MessagePoint: number,
    MessageText:string,
    UserId :string,
    Name: string,
    UserPoint: number,
}