import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertyclass',
  templateUrl: './propertyclass.component.html',
  styleUrls: ['./propertyclass.component.css']
})
export class PropertyclassComponent implements OnInit {
  classofcss:string= 'one two three four'

  constructor() { }
  ChangeCss(){
    this.classofcss="newOne"
  
}
  FirstCss() {
    this.classofcss= 'one two three four'
  }

  ngOnInit(): void {
  }

}
