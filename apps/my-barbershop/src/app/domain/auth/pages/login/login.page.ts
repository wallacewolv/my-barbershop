import { Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'mb-login',
  imports: [TranslocoModule, NzButtonModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  private translocoService = inject(TranslocoService);

  changeLang(lang: 'en' | 'pt-BR') {
    this.translocoService.setActiveLang(lang);
  }
}
