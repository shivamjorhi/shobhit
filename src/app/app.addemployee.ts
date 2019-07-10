import { Component } from "@angular/core";

@Component({
    selector:'add-emp',
    templateUrl:'app.add.html'

})
export class AddEmployeeComponent{
    empId:string
    empName:string
    empSalary:number
    empDepartment:string
    arr:any[]=[]
    status:boolean
    empty:boolean=true
    change(){
        this.arr[0]={empId:this.empId,empName:this.empName,empSalary:this.empSalary,empDepartment:this.empDepartment}
        this.status=!this.status
        this.empty=false
        this.empName=null;
        this.empId=null;
        this.empSalary=null;
        this.empDepartment=null;
    }
    
}