import { Pipe, PipeTransform } from "@angular/core";
import { Pet } from "../../model/Pet";

@Pipe({
  name: "nameFilter"
})
export class NameFilterPipe implements PipeTransform {

  transform(pets: Pet[], petName: string): Pet[] {
    return pets.filter(
      pet => pet.name.toLowerCase().includes(
        petName.toLowerCase()
      )
    );
  }

}
