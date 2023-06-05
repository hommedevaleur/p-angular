import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SignupComponent } from "./signup/signup.component";



const routes:Routes = [
{path:'',component:HomeComponent},
{path:'dashboard',component:DashboardComponent},
{path:'signup',component:SignupComponent}
]

@NgModule({
    imports:[
RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}