
export class League{
    private leagueId:number;
    private name:String;
    private type:String;
    private country:String;

    constructor(leagueId: number, name:String, type: String, country: String){
        this.leagueId= leagueId;
        this.name= name;
        this.type= type;
        this.country= country;
    }
}