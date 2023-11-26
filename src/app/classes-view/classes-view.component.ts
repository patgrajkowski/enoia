import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classes-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classes-view.component.html',
  styleUrl: './classes-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClassesViewComponent {}
