class Employee{
    public FirstName:string;
    public LastName:string;
    public Designation:string;
    public Print():void{
        console.log(`${this.FirstName}${this.LastName}-${this.Designation}`);
    }
}
class Developer extends Employee{
    FirstName="yamini";
    LastName="Rangisetty";
    Designation="Developer"
    public Role:String=" Developer Role:Build,Debug,Test";
    public Print():void {
        super.Print();
        console.log('{this.Role}');
    }
}
class Admin extends Employee{
     FirstName="Sumathi";
    LastName="M";
    Designation="Manager";
    public Role:String="Manager Role:Approvals";
    public print(): void {
        super.Print();
        console.log(`${this.Role}`);
    }
} 
let employees=new Array(new Developer(),new Admin());