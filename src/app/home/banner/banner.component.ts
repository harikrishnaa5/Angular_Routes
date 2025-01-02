import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  router: Router = inject(Router)
 onButtonClick(value: string) {

  //  [queryParams]="{search: searchVar.value}"
  this.router.navigate(['/Courses'], {  queryParams :{search: value}})
 }
}
