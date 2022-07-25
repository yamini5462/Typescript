var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.Print = function () {
        console.log("" + this.FirstName + this.LastName + "-" + this.Designation);
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "yamini";
        _this.LastName = "Rangisetty";
        _this.Designation = "Developer";
        _this.Role = " Developer Role:Build,Debug,Test";
        return _this;
    }
    Developer.prototype.Print = function () {
        _super.prototype.Print.call(this);
        console.log('{this.Role}');
    };
    return Developer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Sumathi";
        _this.LastName = "M";
        _this.Designation = "Manager";
        _this.Role = "Manager Role:Approvals";
        return _this;
    }
    Admin.prototype.print = function () {
        _super.prototype.Print.call(this);
        console.log("" + this.Role);
    };
    return Admin;
}(Employee));
var employees = new Array(new Developer(), new Admin());
