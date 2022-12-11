import { Component, OnInit } from "@angular/core";
import { Motors } from "../model/motors.model";
import { MotorsService } from "../service/motors.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Type } from "../model/Type.model";

@Component({
  selector: "add-motors",
  templateUrl: "./add-motors.component.html",
  styleUrls: ["./add-motors.component.css"],
})
export class AddMotorsComponent implements OnInit {
  newMotors = new Motors();
  newIdTyp!: number;
  newType!: Type;
  types!: Type[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private motorsService: MotorsService
  ) {}

  ngOnInit(): void {
    this.motorsService.listeTypes().subscribe((typ) => {
      console.log(typ);
      this.types = typ;
    });
  }
  addMotors() {
    this.newMotors.type = this.types.find((typ) => typ.idTyp == this.newIdTyp);
    this.motorsService.ajouterMotors(this.newMotors).subscribe((moto) => {
      console.log(moto);
      this.router.navigate(["motors"]);
    });
  }
}
