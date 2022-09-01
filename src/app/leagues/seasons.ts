
export class seasons{
    private year:number;
    private start:Date;
    private end:Date;
    private current:boolean;
    private leagueIdFK:number;

    constructor(year: number, start: Date, end: Date, current: boolean, leagueIdFK: number){
        this.year= year;
        this.start= start;
        this.end= end;
        this.current= current;
        this.leagueIdFK= leagueIdFK;
    }
}