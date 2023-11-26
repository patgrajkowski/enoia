import { Route } from '@angular/router';
import { AboutUsViewComponent } from './app/about-us-view/about-us-view.component';
import { ClassesViewComponent } from './app/classes-view/classes-view.component';
import { ContactViewComponent } from './app/contact-view/contact-view.component';
import { FaqViewComponent } from './app/faq-view/faq-view.component';
import { HomepageViewComponent } from './app/homepage-view/homepage-view.component';
import { PriceListViewComponent } from './app/price-list-view/price-list-view.component';
import { RulesViewComponent } from './app/rules-view/rules-view.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomepageViewComponent,
  },
  {
    path: 'kontakt',
    component: ContactViewComponent,
  },
  {
    path: 'faq',
    component: FaqViewComponent,
  },
  {
    path: 'cennik',
    component: PriceListViewComponent,
  },
  {
    path: 'regulamin',
    component: RulesViewComponent,
  },
  {
    path: 'o-nas',
    component: AboutUsViewComponent,
  },
  {
    path: 'oferta',
    component: ClassesViewComponent,
  },
];
