import{NgModule} from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ErrorComponent } from './error/error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'products/:catId',component:ProductPageComponent},
    {path:'home',component:HomePageComponent},
    {path:'about',component:AboutPageComponent},
    {path:'contact',component:ContactPageComponent},
    {path:'products/details/:id',component:ProductDetailPageComponent},
    {path:'register',component:RegisterPageComponent},
    {path:'**',component:ErrorComponent}
    
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}