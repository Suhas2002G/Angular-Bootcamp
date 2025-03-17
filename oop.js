var Student = /** @class */ (function () {
    //constructors
    function Student() {
        console.log('Student object is created');
    }
    // methods [since method is in class, therefore no need to write function keyword]
    Student.prototype.setDetails = function (i, n) {
        this.id = i;
        this.name = n;
    };
    Student.prototype.showDetails = function () {
        console.log("Student id : ".concat(this.id, ", name : ").concat(this.name));
    };
    return Student;
}());
var s1 = new Student();
s1.setDetails(1, 'suhas');
s1.showDetails();
