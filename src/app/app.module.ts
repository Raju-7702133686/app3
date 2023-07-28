import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { StructuraldirectoriesComponent } from './structuraldirectories/structuraldirectories.component';
import { InterpolutionComponent } from './interpolution/interpolution.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwobindingComponent } from './twobinding/twobinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangularComponent } from './rectangular/rectangular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttributesDirectivesComponent } from './attributes-directives/attributes-directives.component';
import { BmiComponent } from './bmi/bmi.component';
import { TableComponent } from './table/table.component';
import { TablesComponent } from './tables/tables.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
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
// import { StudentsComponent } from './students/students.component';
import { CreateStudentsdataComponent } from './create-studentsdata/create-studentsdata.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateExampleComponent } from './create-example/create-example.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { PricePipe } from './price.pipe';
import { AgePipe } from './age.pipe';
import { ImpDirective } from './imp.directive';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { CalComponent } from './cal/cal.component';
import { Cal1Component } from './cal1/cal1.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { Item1Component } from './item1/item1.component';
import { Nav1Component } from './nav1/nav1.component';
import { Cart1Component } from './cart1/cart1.component';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    InfoComponent,
    VariableComponent,
    StructuraldirectoriesComponent,
    InterpolutionComponent,
    EventbindingComponent,
    TwobindingComponent,
    CalculatorComponent,
    RectangularComponent,
    AttributesDirectivesComponent,
    BmiComponent,
    TableComponent,
    TablesComponent,
    VehicleComponent,
    BankaccountsComponent,
    AccountsComponent,
    FlipcartComponent,
    MailComponent,
    AcitivityComponent,
    MemesComponent,
    ResumeComponent,
    HomeworkComponent,
    Bank1Component,
    Flipcart1Component,
    Mail1Component,
    CreateVehicleComponent,
    CreateBankaccountsComponent,
    CreateStudentsdataComponent,
    CreateUserComponent,
    CreateProductComponent,
    CreateExampleComponent,
    VehicleDetailsComponent,
    PricePipe,
    AgePipe,
    ImpDirective,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    CalComponent,
    Cal1Component,
    ItemComponent,
    NavComponent,
    CartComponent,
    Item1Component,
    Nav1Component,
    Cart1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
