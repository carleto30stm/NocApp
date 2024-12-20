
export enum LogLevel{
    low     = "low",
    medium  = "medium",
    high    = "high"
}

export class LogModel{
    private level : string;
    private message : string;
    private createdAt: Date;

    constructor( message : string, level : LogLevel){
        this.message = message;
        this.level = level;
        this.createdAt = new Date();
    }
}


