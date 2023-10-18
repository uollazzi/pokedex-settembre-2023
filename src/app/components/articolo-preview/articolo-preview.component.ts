import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articolo } from 'src/app/models/articolo';

@Component({
  selector: 'app-articolo-preview',
  templateUrl: './articolo-preview.component.html',
  styleUrls: ['./articolo-preview.component.css']
})
export class ArticoloPreviewComponent {
  @Input()
  articolo?: Articolo;

  @Output()
  onRichiestaCancellazione = new EventEmitter<number>();

  elimina() {
    this.onRichiestaCancellazione.emit(this.articolo!.id);
  }
}
