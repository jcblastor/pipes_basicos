import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'miPipe' // nombre del pipe con el cual sera llamado
})
// a fuerza tiene que implementar PipeTrasform
export class MayusculasPipe implements PipeTransform {
  transform(value: string, enMayus: boolean): string {
    /*
      if ( enMayus) {
        return value.toUpperCase();
      } else {
        return value.toLowerCase();
      }
    */
    return (enMayus) ? value.toUpperCase() : value.toLowerCase()
  }

}
