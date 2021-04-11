import { Pipe, PipeTransform } from '@angular/core';
import { Rental } from '../models/rental';
import { RentDetail } from '../models/rentDetail';

@Pipe({
  name: 'filterPipeRental'
})
export class FilterPipeRentalPipe implements PipeTransform {

  transform(value: RentDetail[], filterTextRental: string): RentDetail[] {
    filterTextRental = filterTextRental ? filterTextRental.toLocaleLowerCase() : ""
    // return filterTextRental ? value.filter((r : Rental) => r.carId.toLocaleLowerCase().indexOf(filterTextRental)!==-1) : value;
    return value;
    
  }

}
