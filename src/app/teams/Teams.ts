export class Teams{
    team_id:number;
    name:String;
    code:String;
    logo:String;
    country:String;
    founded:number;

    constructor(team_id:number, name:String, code:String, logo:String, country:String, founded:number){
        this.team_id= team_id;
        this.name= name;
        this.code= code;
        this.logo= logo;
        this.country= country;
        this.founded= founded;
    }

}