import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  texto!: string;
  required_color: boolean = false;

  @Input()
  set required(value: boolean) {
    this.required_color = value;
  }

  @Input() readonly = false;
  @Input() disabled = false;
  @Input() showCloseButton = false;
  @Input() invalido: boolean = false;
  @Input() objectSource: any = {};
  @Input() editField: string = '';
  @Input() placeHolder: string = 'Pesquisar';
  @Input() maxHeight!: string;
  @Input() textAlign!: string;
  @Input() maxLength: number = 500;
  @Input() keyValue: any = null;
  @Input() padrao: boolean = false;

  @Output() changeSearch = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();
  @Output() onEnter = new EventEmitter<string>();
  @Output() closeButtonEvent = new EventEmitter<string>();
  @Output() changeTexto = new EventEmitter<string>();

  @ViewChild('edInput', { static: true }) edInput!: ElementRef;

  constructor() {}

  ngOnInit() {}

  public clickSearch() {
    this.search.emit(this.texto);
  }

  public onKeyDown(event: any) {
    if (this.readonly) return;
    if (event) event.stopPropagation();
    if (this.texto) this.onEnter.emit(this.texto);
  }

  public changeText(texto: string) {
    this.texto = texto;
    this.changeTexto.emit(this.texto);
  }

  public setFocus() {
    if (this.edInput && this.edInput.nativeElement) {
      this.edInput.nativeElement.focus();
    }
  }

  public setTexto(texto: string) {
    this.edInput.nativeElement.value = texto;
    this.texto = texto;
  }

  public getTexto() {
    return this.edInput.nativeElement.value;
  }

  selectAllText() {
    if (this.edInput && this.edInput.nativeElement && this.texto) {
      this.edInput.nativeElement.setSelectionRange(0, this.texto.length);
    }
  }

  public onFocusOutInput(event: any) {
    event.stopPropagation();
    if (!event.relatedTarget || event.relatedTarget.id !== 'search') {
      const texto = this.edInput.nativeElement.value;
      if (texto) this.changeSearch.emit(this.edInput.nativeElement.value);
    }
  }

  clickCloseButton() {
    this.closeButtonEvent.emit();
  }

  public blur() {
    this.edInput.nativeElement.blur();
  }
}
