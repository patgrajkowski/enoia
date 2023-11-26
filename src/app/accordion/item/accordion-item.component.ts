import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export interface IAccordionItem {
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [CommonModule, FaIconComponent],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent implements OnChanges {
  @Input()
  item: IAccordionItem = { title: '', content: '' };

  @Input()
  isActive: boolean = false;

  @ViewChild('contentContainer')
  contentContainer?: ElementRef;

  @ViewChild('content')
  content?: ElementRef;

  private renderer = inject(Renderer2);

  faChevronDown = faChevronDown;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isActive']) {
      this.toggleItem();
    }
  }

  toggleItem = (): void => {
    if (this.contentContainer && this.content) {
      const contentHeight = this.content.nativeElement.offsetHeight;
      const maxHeight = this.contentContainer.nativeElement.style.maxHeight;
      if (maxHeight === 'fit-content') {
        this.setContentContainerHeight(`${contentHeight}px`);
        setTimeout(() => {
          this.removeContentContainerHeight();
        });
        return;
      }
      this.setContentContainerHeight(`${contentHeight}px`);
      setTimeout(() => {
        this.setContentContainerHeight('fit-content');
      }, 200);
    }
  };

  private setContentContainerHeight = (value: string): void => {
    if (this.contentContainer) {
      this.renderer.setStyle(
        this.contentContainer.nativeElement,
        'max-height',
        value
      );
    }
  };

  private removeContentContainerHeight = (): void => {
    if (this.contentContainer) {
      this.renderer.removeStyle(
        this.contentContainer.nativeElement,
        'max-height'
      );
    }
  };
}
