import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "src/environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../../model/Pet";

@Injectable({
  providedIn: "root"
})
export class PetService {

  private url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>
    (this.url)
      .pipe(
        map(
          (pet) => pet.sort(
            (pet1, pet2) => {
              return pet1.name.localeCompare(pet2.name);
            }
          )
        )
      );
  }

  addPet(pet: Pet) {
    return this.http.post(this.url, pet);
  }

  getPetByName(petName: string): Observable<Pet> {
    return this.http.get<Pet>(this.url + '/' + petName)

  }
}
