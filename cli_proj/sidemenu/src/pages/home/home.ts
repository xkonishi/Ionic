import { Component } from '@angular/core';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pushPage: any;

  constructor() {

  }

  onClickBtn1() {
    this.pushPage = ListPage;
  }

}
