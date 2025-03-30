import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubscriptionService } from '@domain/subscription/services/subscription.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { debounceTime } from 'rxjs';

import { DynamicFormComponent } from '../../../../widget/components/dynamic-form/dynamic-form.component';
import { eDynamicField } from './../../../../widget/components/dynamic-form/dynamic-field.enum';
import { iDynamicFormConfig } from './../../../../widget/components/dynamic-form/dynamic-form-config.interface';
import { ADMIN_FORM_CONFIG } from '@domain/auth/constants/admin-form-config.constant';

@UntilDestroy()
@Component({
  selector: 'mb-admin-details',
  imports: [
    DynamicFormComponent,
    NzButtonModule,
    NzFlexModule,
    NzIconModule,
    NzTypographyModule,
    RouterModule,
  ],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.scss',
})
export class AdminDetailsComponent implements AfterViewInit {
  protected subscriptionService = inject(SubscriptionService);

  formConfig: Array<iDynamicFormConfig> = ADMIN_FORM_CONFIG();

  @ViewChild(DynamicFormComponent) dynamicForm!: DynamicFormComponent;

  ngAfterViewInit(): void {
    this.dynamicForm?.form.valueChanges
      .pipe(untilDestroyed(this), debounceTime(300))
      .subscribe(() => {
        const form = this.subscriptionService.getAdminForm();
        form.patchValue(this.dynamicForm.form.getRawValue());
      });

    this.dynamicForm.form.patchValue(
      this.subscriptionService.getAdminForm().value,
    );
  }
}
