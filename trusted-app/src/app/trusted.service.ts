import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TrustedService {
  constructor(private domSanitizer: DomSanitizer) {
    if ((window as any)?.trustedTypes?.createPolicy) {
      this.customTrustedPolicy = (window as any).trustedTypes.createPolicy(
        'myEscapePolicy',
        {
          createHTML: (str: string) => encodeURIComponent(str),
          createScript: (str: string) => this.domSanitizer.sanitize(SecurityContext.SCRIPT, str),
          createScriptURL: (str: string) => this.domSanitizer.sanitize(SecurityContext.URL, str)
        }
      );
    }
  }

  public customTrustedPolicy;
}
