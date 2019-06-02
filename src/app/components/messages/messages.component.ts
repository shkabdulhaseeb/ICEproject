import {Component, OnInit} from "@angular/core";
import {SecUtil} from "../../classes/sec-util";
import {ErrorHandlerService} from "../../services/error-handler.service";
import {NewsRestControllerService, PageDTONewsDTO} from "../../ws/soccer";

@Component({
  selector: 'app-messages',
  template: `
   <table></table>
  `,
  styles: []
})
export class MessagesComponent implements OnInit {

  newsPage: PageDTONewsDTO;

  loading: boolean;

  searchTerm: string;
  currentPage: any = 0;

    constructor(private _api: NewsRestControllerService, private _errorHandler: ErrorHandlerService) {
  }

  ngOnInit() {
    this.getPage(this.currentPage);
    SecUtil.userUpdated.subscribe(() => this.getPage(this.currentPage));
  }

  getPage(page: number) {
    this.loading = true;

      this._api.getNewsPage(page, this.searchTerm, 10)
        .subscribe(
            n => {
              this.newsPage = n;
              this.loading = false;
            },
            err => this._errorHandler.handle(err));
  }

  isAdmin() {
    return SecUtil.isAdmin();
  }
}
