import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-footer',
  template: `
  <div id="copyright">
      <div class="container">
          <div class="col-md-6">
            <a class="pull-left" href="https://github.com/tdedobbeleer">
                <img src="https://i.ibb.co/yBS53KZ/iconfinder-football-helmet-416377-1.png" alt="Football Soccer " class="hidden-xs">
                <img src="https://i.ibb.co/yBS53KZ/iconfinder-football-helmet-416377-1.png" alt="Football Soccer" class="visible-xs"><span
                    class="sr-only">Go to homepage</span>
            </a>
          </div>
          <div class="col-md-6">
<strong><p class="pull-right">Designed With ☕️ and ❤️ 
                  
                  <!-- Not removing these links is part of the licence conditions of the template. Thanks for understanding :) -->
              </p></strong>
          </div>
      </div>
  </div>

  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
