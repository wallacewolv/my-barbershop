import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'mb-login',
  imports: [
    NzButtonModule,
    NzFlexModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
})
export class LoginPage {
  private supabase = injectSupabase();
  private notificationService = inject(NzNotificationService);
  private router = inject(Router);

  loginForm!: UntypedFormGroup;

  constructor() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  async login() {
    if (!this.loginForm.valid) {
      this.notificationService.error('Erro', 'Preencha os campos corretamente');
      return;
    }

    const { email, password } = this.loginForm.value;
    const { error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      this.notificationService.error(
        'Erro ao fazer login',
        'Verifique suas credenciais e tente novamente',
      );
      return;
    }

    this.router.navigate(['/']);
  }
}
