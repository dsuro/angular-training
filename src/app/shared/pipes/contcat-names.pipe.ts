import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contcatNames'
})
export class ContcatNamesPipe implements PipeTransform {

  transform(value: any, args1?: any, args2?: any): any {
    if(value && args1 && args2){
      return value[args1]+" - "+value[args2];
    }
    return null;
  }
}
