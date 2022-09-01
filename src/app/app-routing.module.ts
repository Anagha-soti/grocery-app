import{NgModule} from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ErrorComponent } from './error/error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AuthGuard } from './guard/auth.guard';

const routes : Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'products/:catId',component:ProductPageComponent, canActivate: [AuthGuard]},
    {path:'home',component:HomePageComponent,canActivate: [AuthGuard]},
    {path:'about',component:AboutPageComponent, canActivate: [AuthGuard]},
    {path:'contact',component:ContactPageComponent},
    {path:'products/details/:id',component:ProductDetailPageComponent, canActivate: [AuthGuard]},
    {path:'register',component:RegisterPageComponent},
    {path:'login',component:LoginPageComponent},
   {path:'**',component:ErrorComponent}
    
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}