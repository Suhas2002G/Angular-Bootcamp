class Student{
    // instance variables [no need to write let,or const in class variables]
    id : number;
    name : string;
    marks : number; 


    //constructors
    constructor(){
        console.log('Student object is created');
    }


    // methods [since method is in class, therefore no need to write function keyword]
    setDetails(i:number,n:string){
        this.id = i;
        this.name = n;
    }
    showDetails(){
        console.log(`Student id : ${this.id}, name : ${this.name}`)
    }
}




const s1:Student = new Student();
s1.setDetails(1,'suhas');
s1.showDetails()



//op : 
// PS E:\AngularBootcamp> tsc .\oop.ts
// PS E:\AngularBootcamp> node .\oop.js
// Student object is created
// Student id : 1, name : suhas