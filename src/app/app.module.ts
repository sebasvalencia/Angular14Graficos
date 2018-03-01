import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';
import { LineaComponent } from './components/linea/linea.component';

// Graficos
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LineaComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
