import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage-view.component.html',
  styleUrl: './homepage-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageViewComponent {}
