import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageSrc!: string;
  @Input() imageAlt!: string;
  @Input() title!: string;
  @Input() subtitle!: string;


}
