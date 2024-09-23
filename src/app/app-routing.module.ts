import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './header/home/home.component';
import { LivescoresComponent } from './header/livescores/livescores.component';
import { RecentResultsComponent } from './header/recent-results/recent-results.component';
import { UpcomingComponent } from './header/upcoming/upcoming.component';
import { SelectionsComponent } from './header/selections/selections.component';
import { U19formComponent } from './header/selections/u19form/u19form.component';
import { RanjiformComponent } from './header/selections/ranjiform/ranjiform.component';
import { AddressDetailsComponent } from './header/selections/u19form/address-details/address-details.component';
import { CricketDetailsComponent } from './header/selections/u19form/cricket-details/cricket-details.component';
import { DocumentDetailsComponent } from './header/selections/u19form/document-details/document-details.component';
import { PlayersdataComponent } from './header/selections/u19form/playersdata/playersdata.component';
import { AddressformComponent } from './header/selections/ranjiform/addressform/addressform.component';
import { PlayerexpriencesComponent } from './header/selections/ranjiform/playerexpriences/playerexpriences.component';
import { DocumentformComponent } from './header/selections/ranjiform/documentform/documentform.component';
import { PlayerdataComponent } from './header/selections/ranjiform/playerdata/playerdata.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'livescores',component:LivescoresComponent},
  {path:'recent-results',component:RecentResultsComponent},
  {path:'upcoming',component:UpcomingComponent},
  {path:'selections',component:SelectionsComponent},
  {path:'u19form',component:U19formComponent},
  {path:'ranjiform',component:RanjiformComponent},
  {path:'address-details',component:AddressDetailsComponent},
  {path:'cricket-details',component:CricketDetailsComponent},
  {path:'document-details',component:DocumentDetailsComponent},
  {path:'playersdata',component:PlayersdataComponent},
  {path:'addressform',component:AddressformComponent},
  {path:'playerexpriences',component:PlayerexpriencesComponent},
  {path:'documentform',component:DocumentformComponent},
  {path:'playerdata',component:PlayerdataComponent}
];
   
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
