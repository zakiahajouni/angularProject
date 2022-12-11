import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MotorsService } from "../service/motors.service";
import { Motors } from "../model/motors.model";
import { Type } from "../model/Type.model";
@Component({
  selector: "app-update-motors",
  templateUrl: "./update-motors.component.html",
  styleUrls: ["./update-motors.component.css"],
})
export class UpdateMotorsComponent implements OnInit {
  currentMotors = new Motors();
  types!: Type[];
  updatedTypId!: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private motorsService: MotorsService
  ) {}

  ngOnInit(): void {
    this.motorsService.listeTypes().subscribe((cats) => {
      this.types = cats;
      console.log(cats);
    });
    this.motorsService
      .consulterMotors(this.activatedRoute.snapshot.params["id"])
      .subscribe((moto) => {
        this.currentMotors = moto;
        this.updatedTypId = this.currentMotors.type!.idTyp;
      });
  }

  updateMotors() {
    this.currentMotors.type!.idTyp = this.updatedTypId
    this.motorsService.updateMotors(this.currentMotors).subscribe((moto) => {
      this.router.navigate(["motors"]);
    });
  }
}
