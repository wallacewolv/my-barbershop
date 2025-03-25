import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'mb-forgot-password',
  imports: [NzButtonModule, NzFormModule, NzInputModule, FormsModule],
  templateUrl: './forgot-password.page.html',
  styleUrl: './forgot-password.page.scss',
})
export class ForgotPasswordPage {
  private supabase = injectSupabase();
  private notificationService = inject(NzNotificationService);

  email = model('');

  async submit() {
    await this.supabase.auth.resetPasswordForEmail(this.email());
    this.notificationService.error(
      'Email enviado',
      'Verifique sua caixa de entrada',
    );

    this.email.set('');
  }
}
