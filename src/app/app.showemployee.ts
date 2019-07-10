import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector:'show-employee',
    templateUrl:'app.showemployee.html'
})
export class ShowEmployee implements OnChanges{

    arr:any[]=[
        {empId:1001,empName:"ABCD",empSalary:5000,empDepartment:"Java"},
        {empId:1004,empName:"Subhanshu",empSalary:50000,empDepartment:"Java"},
        {empId:1005,empName:"ABCD",empSalary:100000,empDepartment:"Java"}
    ]
    
    @Input()
    emparr:any[]=[]
   
    addEmployee():any{
       
    }
    @Input()
    status:boolean
    @Input()
    empty:boolean
    ngOnChanges(changes: SimpleChanges):any {
        if(changes['status']){
        if(this.empty==false){
            this.arr.push(this.emparr[0])
        }
  }
}
}


    
     