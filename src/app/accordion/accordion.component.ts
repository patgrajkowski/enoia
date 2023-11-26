import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  AccordionItemComponent,
  IAccordionItem,
} from './item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule, AccordionItemComponent],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input()
  items: IAccordionItem[] = [];

  private _activeItemIndex: number | undefined = undefined;

  onClickHandler(index: number) {
    this._activeItemIndex === index
      ? (this._activeItemIndex = undefined)
      : (this._activeItemIndex = index);
  }

  isItemActive(index: number) {
    return index === this._activeItemIndex;
  }
}
