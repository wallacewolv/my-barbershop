import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { injectSupabase } from '@shared/functions/inject-supabase.function';
import { LoadingService } from '@shared/services/loading/loading.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { eDynamicField } from '../../../../widget/components/dynamic-form/dynamic-field.enum';
import { DynamicFormComponent } from '../../../../widget/components/dynamic-form/dynamic-form.component';
import { iDynamicFormConfig } from './../../../../widget/components/dynamic-form/dynamic-form-config.interface';

@Component({
  selector: 'mb-forgot-password',
  imports: [
    DynamicFormComponent,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './forgot-password.page.html',
  styleUrl: './forgot-password.page.scss',
})
export class ForgotPasswordPage {
  private supabase = injectSupabase();
  private notificationService = inject(NzNotificationService);
  protected loadingService = inject(LoadingService);

  formConfig: iDynamicFormConfig[] = [
    {
      label: 'Email',
      name: 'email',
      type: {
        field: eDynamicField.INPUT,
        typeField: 'email',
      },
      validations: [Validators.required, Validators.email],
      size: 24,
    },
  ];

  @ViewChild(DynamicFormComponent) dynamicForm!: DynamicFormComponent;

  async submit() {
    this.loadingService.start();

    const { email } = this.dynamicForm.form.value;

    await this.supabase.auth.resetPasswordForEmail(email);
    this.notificationService.success(
      'Email enviado',
      'Verifique sua caixa de entrada',
    );

    this.dynamicForm.form.reset();

    this.loadingService.stop();
  }
}
