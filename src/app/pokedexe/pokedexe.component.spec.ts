import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexeComponent } from './pokedexe.component';

describe('PokedexeComponent', () => {
  let component: PokedexeComponent;
  let fixture: ComponentFixture<PokedexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokedexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
