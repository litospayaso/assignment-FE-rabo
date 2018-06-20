import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

/**
* Main page application
*/
export class HomePage {

  /**
 * sorting var to generate sort direction
 */
  sorting: boolean = true;
  /**
 * index of column that is sorted
 */
  indexSort: number;
  /**
* word for filter table
*/
  filterWord: string;
  /**
* Array with table titles
*/
  tableTitle: string[];
  /**
 * all raw data csv
 */
  rawData: string[][];
  /**
 * data table displayed after sorting
 */
  data: any;

  /**
* @ignore
*/
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  /**
 * Function to hanlde file upload
 * @param {any} files input file.
 * @returns void
 */
  fileUpload(files: any) {
    if (files && files.length > 0) {
      let file: File = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result;
        const re = /(?:\.([^.]+))?$/;
        if (re.exec(file.name)[1] === "csv") {
          this.data = this.formatCsv(csv);
          this.tableTitle = this.data[0];
          this.data = this.data.slice(1);
          this.rawData = this.data;
        } else {
          this.showErrorFile();
        }
      }
    }
  }

  /**
 * Function to format raw csv string.
 * @param {string} csv input csv.
 * @returns void
 */
  formatCsv(csv: string) {
    let result = csv.replace(/['"]+/g, '').split(/\r?\n/);
    return result.map(e => e.split(','));
  }

  /**
 * Function sort a column when click.
 * @param {number} index index of column to sort
 * @returns void
 */
  sortColumn(index: number) {
    if (this.sorting) {
      this.data = this.data.sort((a, b) => a[index] > b[index]);
    } else {
      this.data = this.data.sort((a, b) => a[index] < b[index]);
    }
    this.sorting = !this.sorting;
    this.indexSort = index;
  }

  /**
 * Function to filter the table by word.
 * @returns void
 */
  filterColumn() {
    this.indexSort = -1;
    this.data = this.rawData.filter(e => e.join(" ").includes(this.filterWord));
  }

  /**
 * Displays an error alert if data format is not supported.
 * @returns void
 */
  showErrorFile() {
    const alert = this.alertCtrl.create({
      title: 'Incorrect file',
      subTitle: 'Application only supports csv files',
      buttons: ['OK']
    });
    alert.present();
  }

}
