import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TrustedService {
  constructor(private domSanitizer: DomSanitizer) {
    if (window?.trustedTypes?.createPolicy) {
      this.customTrustedPolicy = window.trustedTypes.createPolicy('myEscapePolicy', {
        createHTML: (str) =>
          this.domSanitizer.sanitize(SecurityContext.HTML, str)!,
        createScript: (str) =>
          this.domSanitizer.sanitize(SecurityContext.SCRIPT, str)!,
        createScriptURL: (str) =>
          this.domSanitizer.sanitize(SecurityContext.RESOURCE_URL, str)!,
      });
    }
  }

  public customTrustedPolicy!: TrustedTypePolicy;
}
