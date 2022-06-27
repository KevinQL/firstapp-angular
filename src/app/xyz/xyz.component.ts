import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  nameuser: string  = 'kevin';
  users: string[] = ['kevin', 'blanca', 'sofia'];
  validate: boolean = true;
  userdata : {
    id: number;
    name: string;
  }

  // inicializando valores para los datos ngModel
  name: string = 'kevin';
  age: number = 26;


  constructor() { 
    this.userdata = {
      id: 1,
      name: 'John Doe'
    };
    
  }


  clickGuard(){
    alert('Guard clicked');
  }

  addItems(text: any){
    console.log(text.value);
    this.users.push(text.value);
    text.value = "";
    return false;
  }

  deleteItem(item: string){
    this.users.splice(this.users.indexOf(item), 1);
  }


  ngOnInit(): void {
  }

}
