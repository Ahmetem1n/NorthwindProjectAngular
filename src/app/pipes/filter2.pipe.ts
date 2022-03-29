import { Product } from 'src/app/models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {
  transform(value: Product[], filter2: string): Product[] {
    filter2 = filter2 ? filter2.toLocaleLowerCase() : '';
    return filter2
      ? value.filter(
          (p: Product) =>
            String(p.categoryId).toLocaleLowerCase().indexOf(filter2) !== -1
        )
      : value;
  }
}
