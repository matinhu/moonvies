import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-custom-combo',
  templateUrl: './custom-combo.component.html',
  styleUrls: ['./custom-combo.component.scss'],
})
export class CustomComboComponent implements OnInit, OnChanges {
  @Input() label: string = '';
  @Input() labelField!: string;
  @Input() dataProvider: any = [];
  @Input() keyField!: string;
  @Input() editField!: string;
  @Input() objectSource: any;
  @Input() style: any;
  @Input() showClearButton: boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '-- Selecione --';
  @Input() required: boolean = false;
  @Output() changeValue: EventEmitter<any> = new EventEmitter<any>();

  public value: any;
  public selecionado: any;

  constructor() {}

  ngOnInit(): void {
    if (
      this.objectSource &&
      this.editField &&
      this.keyField &&
      this.objectSource[this.editField]
    ) {
      this.value = this.objectSource[this.editField];
    }
  }

  ngOnChanges(): void {
    if (
      this.objectSource &&
      this.editField &&
      this.keyField &&
      this.objectSource[this.editField]
    ) {
      const item = this.dataProvider.find(
        (obj: any) => obj[this.keyField] == this.objectSource[this.editField]
      );
      this.selecionado = item;
      this.value = this.objectSource[this.editField];
    }
  }

  public change(event: any) {
    if (this.objectSource && this.editField && this.keyField) {
      this.objectSource[this.editField] = event.value;
      const item = this.dataProvider.find(
        (obj: any) => obj[this.keyField] == event.value
      );
      this.selecionado = item;
      this.changeValue.emit();
    }
  }

  getStyle(style: string) {
    const styles = style.split(';');
    const properties: any = {};
    for (const s of styles) {
      const values = s.split(':');
      if (values.length > 0 && values[0]) {
        values[0] = values[0].replace(' ', '');
        values[1] = values[1].replace(' ', '');
        properties[values[0]] = values[1];
      }
    }
    return properties;
  }

  clickClear(event: any) {
    this.objectSource[this.editField] = -1;
    this.selecionado = null;
    this.changeValue.emit();
    event.stopPropagation();
  }
}
