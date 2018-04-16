import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dniFormat'
})
export class DniFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let dniNumberFormat: string = value;
    return dniNumberFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

}
