import { ThisReceiver } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { Motors } from "../model/motors.model";
import { Type } from "../model/Type.model";
import { AuthService } from "../service/auth.service";
import { MotorsService } from "../service/motors.service";

@Component({
  selector: "app-recherche-par-types",
  templateUrl: "./recherche-par-types.component.html",
  styleUrls: ["./recherche-par-types.component.css"],
})
export class RechercheParTypesComponent implements OnInit {
  motors!: Motors[];
  idTyp!: number;
  type!: Type[];
  constructor(
    public authservice: AuthService,
    public motorsService: MotorsService
  ) {}

  ngOnInit(): void {
    this.motorsService.listeTypes().subscribe((type) => {
      this.type = type;
    });
  }
  onChange() {
    this.motorsService.rechercherParType(this.idTyp).subscribe((motors) => {
      this.motors = motors;
    });
  }

  supprimerMotors() {}
}
