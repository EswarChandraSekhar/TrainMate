import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'foundReportsFilter',
  standalone: false
})
export class FoundPipePipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any[] {
    let search_input = args[0];
    let train_number = args[1];
    let train_name = args[2];
    let date_input = args[3];

    let result_array = value.filter((obj) => {
      let match_search = true;
      let match_number = true;
      let match_name = true;
      let match_date = true;

      if (search_input !== '') {
        if (obj.itemname.toLowerCase().includes(search_input.toLowerCase())) {
          match_search = true;
        } else {
          match_search = false;
        }
      }

      if (train_number !== '') {
        if (obj.trainNumber.toLowerCase().includes(train_number.toLowerCase())) {
          match_number = true;
        } else {
          match_number = false;
        }
      }

      if (train_name !== '') {
        if (obj.trainName.toLowerCase().includes(train_name.toLowerCase())) {
          match_name = true;
        } else {
          match_name = false;
        }
      }

      if (date_input !== '') {
        let objDate = new Date(obj.dateoffound);
        let inputDate = new Date(date_input);
        if (
          objDate.getFullYear() === inputDate.getFullYear() &&
          objDate.getMonth() === inputDate.getMonth() &&
          objDate.getDate() === inputDate.getDate()
        ) {
          match_date = true;
        } else {
          match_date = false;
        }
      }

      if (match_search && match_number && match_name && match_date) {
        return true;
      } else {
        return false;
      }
    });

    return result_array;
  }

}
