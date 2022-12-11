import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Type } from "../model/Type.model";
import { MotorsService } from "../service/motors.service";

@Component({
  selector: "app-liste-types",
  templateUrl: "./liste-types.component.html",
  styleUrls: ["./liste-types.component.css"],
})
export class ListeTypesComponent implements OnInit {
  types!: Type[];
  updatedTyp: Type = { idTyp: 0, nameTyp: "" };
  ajout: boolean = true;

  constructor(private motorsService: MotorsService, private router: Router) {}

  ngOnInit(): void {
    this.motorsService.listeTypes().subscribe((type) => {
      this.types = type;
    });
  }

  TypeUpdated(types: Type) {
    this.motorsService.ajouterType(types).subscribe ( it=> this.motorsService.listeTypes())
    this.router.navigate(['listeTypes']).then
    (()=>{window.location.reload();});
  }

  update(Type: Type) {
    this.updatedTyp = Type;
    this.ajout = false;
  }
}
