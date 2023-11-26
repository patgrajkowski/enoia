import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-faq-view',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './faq-view.component.html',
  styleUrl: './faq-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqViewComponent {
  faqItems = [
    {
      title: 'Pytanie1',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic pariatur a tempora ut quam at suscipit? Error optio non vero corporis distinctio veritatis minima, sint, consectetur nisi beatae ipsam quod.Quo molestias maiores mollitia vero quasi voluptatum quos, doloribus distinctio, dolore reprehenderit necessitatibus sunt enim accusamus eos repudiandae natus deleniti alias eaque odit itaque officia debitis! Mollitia aspernatur velit repudiandae.Voluptas aliquid ratione, animi praesentium numquam assumenda quidem itaque eligendi aliquam sequi tempora aspernatur dolore! Nam illum cumque ipsum suscipit modi consequatur, provident omnis eveniet deleniti. Recusandae, necessitatibus! Dolorem, provident.Magnam eligendi quod ipsa odit animi porro delectus molestias. Beatae recusandae ex, iusto voluptate sint quam sapiente vel dicta cum doloremque soluta ratione consequuntur asperiores itaque similique omnis maiores iure.',
    },
    {
      title: 'Pytanie2',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic pariatur a tempora ut quam at suscipit? Error optio non vero corporis distinctio veritatis minima, sint, consectetur nisi beatae ipsam quod.Quo molestias maiores mollitia vero quasi voluptatum quos, doloribus distinctio, dolore reprehenderit necessitatibus sunt enim accusamus eos repudiandae natus deleniti alias eaque odit itaque officia debitis!',
    },
    {
      title: 'Pytanie3',
      content:
        ' Mollitia aspernatur velit repudiandae.Voluptas aliquid ratione, animi praesentium numquam assumenda quidem itaque eligendi aliquam sequi tempora aspernatur dolore! Nam illum cumque ipsum suscipit modi consequatur, provident omnis eveniet deleniti. Recusandae, necessitatibus! Dolorem, provident.Magnam eligendi quod ipsa odit animi porro delectus molestias. Beatae recusandae ex, iusto voluptate sint quam sapiente vel dicta cum doloremque soluta ratione consequuntur asperiores itaque similique omnis maiores iure.',
    },
    {
      title: 'Pytanie4',
      content:
        'Quas aliquid illum quidem reprehenderit culpa, debitis laborum tempora similique alias itaque quibusdam atque repellat veritatis officia, autem hic eius deserunt ea quos architecto beatae ad fugiat minus nulla? Sequi?Eius nisi illum est iure reiciendis incidunt beatae voluptas error debitis eaque laborum cum amet similique magnam nostrum quaerat dolorem sint quas adipisci, ab temporibus enim rem maiores! Eum, accusamus?',
    },
  ];
}
