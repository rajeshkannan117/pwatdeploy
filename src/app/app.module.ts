import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatDialogModule, MatPaginatorModule } from '@angular/material';
import { BuilderComponent } from './builder/builder.component';
import { RouterModule, Routes } from '@angular/router';
import { FormioModule } from 'angular-formio';
import { HeaderComponent } from './common/header/header.component';
import { ContentComponent } from './common/content/content.component';
import { FooterComponent } from './common/footer/footer.component';
import { ListComponent } from './list/list.component';
import { BuilderComponent as formCreation } from './forms/builder/builder.component';
import { ElementsComponent } from './forms/elements/elements.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'forms', component: BuilderComponent },
  { path: 'create', component: formCreation },
];

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ListComponent,
    formCreation,
    ElementsComponent
  ],
  entryComponents:[
    ElementsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormioModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
