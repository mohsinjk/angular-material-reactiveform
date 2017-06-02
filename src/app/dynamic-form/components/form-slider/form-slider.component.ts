import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
@Component({
  selector: 'form-slider',
  templateUrl: './form-slider.component.html',
  styleUrls: ['form-slider.component.scss']
})
export class FormSliderComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  tickInterval = 1;
  disabled = false;
  invert = false;
  max = 10;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 3;
  vertical = false;

}