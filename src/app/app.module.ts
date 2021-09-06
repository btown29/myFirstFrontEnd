import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HistoricidadComponent } from './components/historicidad/historicidad.component';
import { TableComponent } from './components/table/table.component';
import { SidebarTemperaturaComponent } from './components/sidebar-temperatura/sidebar-temperatura.component';
import { SidebarFechaComponent } from './components/sidebar-fecha/sidebar-fecha.component';
import { SidebarEstacionComponent } from './components/sidebar-estacion/sidebar-estacion.component';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HistoricidadService } from './services/historicidad.service';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsModule } from '@angular/google-maps'
import { ChartComponent } from './components/chart/chart.component';
import { TabComponent } from './components/tab/tab.component';
import { MatTabsModule} from '@angular/material/tabs';
import { MatProgressBarModule} from '@angular/material/progress-bar'
import { SidebarHistogramComponent } from './components/sidebar-histogram/sidebar-histogram.component';
import { SidebarRegistroComponent } from './components/sidebar-registro/sidebar-registro.component';
import { SidebarFechaHistogramComponent } from './components/sidebar-fecha-histogram/sidebar-fecha-histogram.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { ChartTableComponent } from './components/chart-table/chart-table.component';
import { NgxSpinnerModule} from 'ngx-spinner';
import { InterceptorsService } from './services/interceptors.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { AyudaGeneralComponent } from './components/ayuda-general/ayuda-general.component';
import { AyudaTemperaturaComponent } from './components/ayuda-temperatura/ayuda-temperatura.component';
import { AyudaAlturaComponent } from './components/ayuda-altura/ayuda-altura.component';
import { AyudaFechaComponent } from './components/ayuda-fecha/ayuda-fecha.component';
//import { SidebarHistogramComponent } from './components/sidebar-histogram/sidebar-histogram.component';

//import { AgmComponent } from './components/agm/agm.component';

const materialModules = [MatTabsModule, MatProgressBarModule];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent,
    ChartComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    HistoricidadComponent,
    TableComponent,
    SidebarTemperaturaComponent,
    SidebarFechaComponent,
    SidebarEstacionComponent,
    InterpolacionComponent,
    FooterComponent,
    ChartComponent,
    TabComponent,
    SidebarHistogramComponent,
    SidebarRegistroComponent,
    SidebarFechaHistogramComponent,
    ChartBarComponent,
    ChartTableComponent,
    AlertComponent,
    AlertSuccessComponent,
    AyudaGeneralComponent,
    AyudaTemperaturaComponent,
    AyudaAlturaComponent,
    AyudaFechaComponent
    //SidebarHistogramComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    NgxSpinnerModule,
    NgbModule,
    //Pagado AgmCoreModule.forRoot({apiKey:"AIzaSyBimBPdTv2i0h0j1Rk8broRLQdBtw-ihmI"}),
    materialModules,
    // Gratis
    AgmCoreModule.forRoot({apiKey:"AIzaSyBimBPdTv2i0h0j1Rk8broRLQdBtw-ihmI"})


  ],
  providers: [ NgbActiveModal, {provide:HTTP_INTERCEPTORS, useClass:InterceptorsService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
