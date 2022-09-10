export class Players{
    id: number;
    name: String;
    firstName: String;
    lastName: String;
    age: number;
    DOB: String;
    nationality: String;

    constructor(id:number, name:String, firstName:String, lastName:String, age:number, DOB:String, nationality:String){
        this.id= id;
        this.name= name;
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
        this.DOB= DOB;
        this.nationality= nationality;
    }
}