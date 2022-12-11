import { Injectable, Input } from "@angular/core";
import { Motors } from "../model/motors.model";
import { Type } from "../model/Type.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class MotorsService {
  apiUrl: string = "http://localhost:8090/motors/api";
  motors!: Motors[];
  motor!: Motors;
  types!: Type[];
  motorsrecherch!: Motors[];

  constructor(private http: HttpClient) {}

  listeMotors(): Observable<Motors[]> {
    return this.http.get<Motors[]>(this.apiUrl);
  }
  ajouterMotors(m: Motors): Observable<Motors> {
    return this.http.post<Motors>(this.apiUrl, m, httpOptions);
  }

  supprimerMotors(id: number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterMotors(id: number): Observable<Motors> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Motors>(url);
  }

  updateMotors(m: Motors): Observable<Motors> {
    return this.http.put<Motors>(this.apiUrl, m, httpOptions);
  }

  trierMotors() {
    this.motors = this.motors.sort((n1, n2) => {
      if (n1.idMotors! > n2.idMotors!) {
        return 1;
      }
      if (n1.idMotors! < n2.idMotors!) {
        return -1;
      }
      return 0;
    });
  }

  listeTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.apiUrl + "/typ");
  }

  consulterType(idTyp: number): Type {
    return this.types.find((typ) => typ.idTyp == idTyp)!;
  }

  // rechercherParType(idTyp: number): Motors[]{
  //   this.motorsrecherch = [];

  //   this.motors.forEach((cur, index) => {
  //    if(idTyp == cur.types.idTyp) {
  //        console.log("cur "+cur);
  //       this.motorsrecherch.push(cur);
  //        }
  //  });
  //  return this.motorsrecherch;
  //  }

  rechercherParType (idTyp: number): Observable<Motors[]> {
    const url = `${this.apiUrl}/motostyp/${idTyp}`;
    return this.http.get<Motors[]>(url);
  }

  ajouterType(item: Type):Observable<Type>{
    return this.http.post<Type>(this.apiUrl + '/typ', item, httpOptions);
    }    
}
