import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Type } from '../model/Type.model';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {
  @Input()
  types! : Type;
  @Output() 
  TypeUpdated= new EventEmitter<Type>();

  @Input()
  ajout! : boolean;
  
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateType ",this.types);

  }

  saveType(){
    this.TypeUpdated.emit(this.types);
    }

  
}
