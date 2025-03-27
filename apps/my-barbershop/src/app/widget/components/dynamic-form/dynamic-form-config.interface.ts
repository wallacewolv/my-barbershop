import { Observable } from 'rxjs';
import { eDynamicField } from './dynamic-field.enum';
import { NzSelectModeType } from 'ng-zorro-antd/select';
import { FormGroup, ValidatorFn } from '@angular/forms';
import { eBucketName } from '@shared/enums/bucket-name.enum';

export interface iTypeControl {
  field: eDynamicField;
  typeField?: string;
  inputMode?: string;
}

export interface iOptions {
  label: string;
  value?: string | number | boolean;
  disabled?: boolean;
  icon?: string;
}

export interface iSelect {
  options?: iOptions[];
  options$?: Promise<iOptions[]> | Observable<iOptions[]>;
  mode?: NzSelectModeType;
  showSearch?: boolean;
  hideClear?: boolean;
  hide?: string[];
  maxTagCount?: number;
  dropdownMatchSelectWidth?: boolean;
}

export interface DynamicFormDate {
  disableDate?: (current: Date) => boolean;
}

export interface iDynamicFormConfig {
  label?: string;
  name: string;
  type: iTypeControl;

  object?: object;
  disabled?: boolean;
  hideIfDisabled?: boolean;
  hidden?: boolean;
  initialValue?: unknown;
  placeholder?: string;
  size?: number;
  mobileSize?: number;
  select?: iSelect;
  date?: DynamicFormDate;
  validations?: ValidatorFn | ValidatorFn[];
  hint?: string;
  help?: string;
  mask?: string;
  maskSuffix?: string;
  rows?: number;
  keepSpecialCharacters?: boolean;
  showForgotPassword?: boolean;
  forgotPasswordLink?: string;
  showPasswordIcon?: boolean;
  fileAccept?: string;
  autoFocus?: boolean;
  addOnAfter?: string;
  addOnAfterIcon?: string;
  onAddOnAfterClick?: (form: FormGroup) => void;
  imageBucket?: eBucketName;
  onChange?: (
    data: unknown | null | object | boolean | string | number,
    form: FormGroup,
  ) => void;
  onOpenChange?: (open: boolean, form: FormGroup) => void;
}
