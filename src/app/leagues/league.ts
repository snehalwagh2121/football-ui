
export class League{
    leagueId:number;
    name:String;
    type:String;
    country:String;
    seasonYear:number

    constructor(leagueId: number, name:String, type: String, country: String, seasonYear:number){
        this.leagueId= leagueId;
        this.name= name;
        this.type= type;
        this.country= country;
        this.seasonYear= seasonYear;
    }

    public getName():String{
        return this.name;
    }
}