import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { MatInputModule} from '@angular/material';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "welcome/:username", component: WelcomeComponent },
  { path: "", redirectTo: "login", pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatInputModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
