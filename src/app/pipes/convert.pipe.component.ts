import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: any, targetUnit: string): any {
    if (!value) return null;
    switch (targetUnit) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1609.34;
      default:
        return value;
    }
  }
}
