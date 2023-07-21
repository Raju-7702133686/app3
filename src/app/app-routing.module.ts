import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuraldirectoriesComponent } from './structuraldirectories/structuraldirectories.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolutionComponent } from './interpolution/interpolution.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwobindingComponent } from './twobinding/twobinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { AttributesDirectivesComponent } from './attributes-directives/attributes-directives.component';
import { BmiComponent } from './bmi/bmi.component';
import { TableComponent } from './table/table.component';
import { TablesComponent } from './tables/tables.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { MailComponent } from './mail/mail.component';
import { AcitivityComponent } from './activity/acitivity.component';
import { MemesComponent } from './memes/memes.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeworkComponent } from './homework/homework.component';
import { Bank1Component } from './bank1/bank1.component';
import { Flipcart1Component } from './flipcart1/flipcart1.component';
import { Mail1Component } from './mail1/mail1.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankaccountsComponent } from './create-bankaccounts/create-bankaccounts.component';
// import { StudentsComponent } from './studentssdata/studentsdata.component';
import { CreateStudentsdataComponent } from './create-studentsdata/create-studentsdata.component';
import { authenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateExampleComponent } from './create-example/create-example.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[authenticationGuard], children:[
    {path:'home',component:HomeComponent},
    {path:'info',component:InfoComponent},
    {path:'variable',component:VariableComponent},
    {path:'interpolution',component:InterpolutionComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:'twobinding',component:TwobindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'rectangular',component:RectangularComponent},
    {path:'bmi',component:BmiComponent},
    {path:'attributes-directives',component:AttributesDirectivesComponent},
    {path:'table',component:TableComponent},
    {path:'structoraldirectories',component:StructuraldirectoriesComponent},
    {path:'tables',component:TablesComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'bankaccounts',component:BankaccountsComponent},
    {path:'accounts',component:AccountsComponent},
    {path:'flipcart',component:FlipcartComponent},
    {path:'mail',component:MailComponent},
    {path:'activity',component:AcitivityComponent},
    {path:'memes',component:MemesComponent},
    {path:'resume',component:ResumeComponent},
    {path:'homework',component:HomeworkComponent},
    {path:'bank',component:Bank1Component},
    {path:'flipcart1',component:Flipcart1Component},
    {path:'mail1',component:Mail1Component},
    {path:'create-vehicle',component:CreateVehicleComponent},
    {path:'create-bankaccounts',component:CreateBankaccountsComponent},
    {path:'create-studentsdata',component:CreateStudentsdataComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'create-product',component:CreateProductComponent},
    {path:'create-example',component:CreateExampleComponent}


  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

