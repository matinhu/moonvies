import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPessoaComponent } from './item-pessoa.component';

describe('ItemPessoaComponent', () => {
  let component: ItemPessoaComponent;
  let fixture: ComponentFixture<ItemPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
