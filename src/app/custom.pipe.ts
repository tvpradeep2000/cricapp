import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // transform(value: any, ...args: any[]): any {
  //  console.log('you value is'+value)
  //   return 'Mr.'+value;
  // }

  transform(value: any, ...args: any[]): any {
    console.log('you value is',args,value)
    if(args[0] ==='Male')
     return 'Mr.'+value;
    else if(args[0] ==='Female')
      return 'Mrs.'+value
   } 
}
