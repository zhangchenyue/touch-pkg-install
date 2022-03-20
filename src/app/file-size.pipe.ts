import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FileSizePipe implements PipeTransform {
  transform(size: number | undefined, extension: string = 'MB') {
    if (typeof size === 'undefined') {
      return size;
    }
    return (size / (1024 * 1024)).toFixed(1) + extension;
  }
}
