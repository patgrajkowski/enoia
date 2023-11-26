import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price-list-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-list-view.component.html',
  styleUrl: './price-list-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceListViewComponent {}
