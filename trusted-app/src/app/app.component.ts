import { DOCUMENT } from '@angular/common';
import { Component, Inject, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TrustedService } from './trusted.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputData = '';
  trustedData!: SafeHtml;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private domSanitizer: DomSanitizer,
    private trustedService: TrustedService
  ) {}
  addDOM() {
    // Data
    //<img src='dd' onerror="alert('innerHTML attack')" />
    //window.alert('Inline script attack')
    //http://localhost:8081/attack.js
    //window.alert('Runtime code compile attack')

    // this.document.getElementById('placeholder')!.innerHTML =
    //   this.domSanitizer.sanitize(SecurityContext.HTML, this.inputData)!;
    // this.trustedData = this.domSanitizer.bypassSecurityTrustHtml(this.inputData);
    this.document.getElementById('placeholder')!.innerHTML = this.trustedService.customTrustedPolicy.createHTML(this.inputData);
    // const scriptElement = this.document.createElement('script');
    // scriptElement.textContent = this.inputData;
    // this.document.head.appendChild(scriptElement);
    // const scriptElement = this.document.createElement('script');
    // scriptElement.src = this.inputData;
    // this.document.head.appendChild(scriptElement);
    // eval(this.inputData);
    // setTimeout(this.inputData);
  }
}
