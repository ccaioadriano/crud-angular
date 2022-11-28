import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  propLegal = "qualquer";

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(){
    console.log('Fazendo algo!!');
  }

}
