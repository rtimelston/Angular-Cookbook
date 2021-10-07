import { Component, ViewChild } from '@angular/core';
import { GalleryComponent } from "./components/gallery/gallery.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cc-view-child';

  // Angular ViewChild: https://angular.io/api/core/ViewChild
  // The view query is executed after the ngOnInit life cycle hook and before the ngAfterViewInit hook.
  @ViewChild(GalleryComponent) gallery;

  addNewPicture() {
    // Array's unshift method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
    this.gallery.pictures.unshift(this.gallery.generateImage());
  }

  removeFirstPicture() {
    // Array's shift method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
    this.gallery.pictures.shift();
  }
}
