import { Validators } from '@angular/forms';

import { eDynamicField } from '../../../widget/components/dynamic-form/dynamic-field.enum';
import { iDynamicFormConfig } from '../../../widget/components/dynamic-form/dynamic-form-config.interface';

export const ADMIN_FORM_CONFIG = (): Array<iDynamicFormConfig> => {
  return [
    {
      label: 'Nome',
      name: 'name',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required],
      size: 24,
    },
    {
      label: 'Email',
      name: 'email',
      type: {
        field: eDynamicField.INPUT,
      },
      validations: [Validators.required, Validators.email],
      size: 24,
    },
    {
      label: 'Telefone',
      name: 'phone',
      type: {
        field: eDynamicField.INPUT,
        typeField: 'tel',
      },
      mask: '(00) 00000-0000||(00) 0000-0000',
      validations: [Validators.required],
      size: 24,
    },
    {
      label: 'Senha',
      name: 'password',
      type: {
        field: eDynamicField.INPUT,
        typeField: 'password',
      },
      validations: [Validators.required],
      size: 24,
    },
  ];
};
