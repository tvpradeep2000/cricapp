import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { LivescoresComponent } from './header/livescores/livescores.component';
import { UpcomingComponent } from './header/upcoming/upcoming.component';
import { SelectionsComponent } from './header/selections/selections.component';
import { U19formComponent } from './header/selections/u19form/u19form.component';
import { RanjiformComponent } from './header/selections/ranjiform/ranjiform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressDetailsComponent } from './header/selections/u19form/address-details/address-details.component';
import { CricketDetailsComponent } from './header/selections/u19form/cricket-details/cricket-details.component';
import { DocumentDetailsComponent } from './header/selections/u19form/document-details/document-details.component';
import { PlayersdataComponent } from './header/selections/u19form/playersdata/playersdata.component';
import { RecentResultsComponent } from './header/recent-results/recent-results.component';
import { AddressformComponent } from './header/selections/ranjiform/addressform/addressform.component';
import { PlayerexpriencesComponent } from './header/selections/ranjiform/playerexpriences/playerexpriences.component';
import { DocumentformComponent } from './header/selections/ranjiform/documentform/documentform.component';
import { PlayerdataComponent } from './header/selections/ranjiform/playerdata/playerdata.component';
import { CustomPipe } from './custom.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FilterInProgressPipe } from './pipes/filter-in-progress.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LivescoresComponent,
    UpcomingComponent,
    SelectionsComponent,
    U19formComponent,
    RanjiformComponent,
    AddressDetailsComponent,
    CricketDetailsComponent,
    DocumentDetailsComponent,
    PlayersdataComponent,
    RecentResultsComponent,
    AddressformComponent,
    PlayerexpriencesComponent,
    DocumentformComponent,
    PlayerdataComponent,
    CustomPipe,
    FilterInProgressPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
