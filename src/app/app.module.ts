import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './core/menu/menu.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {SearchInputComponent} from './core/search-input/search-input.component';
import {GroupListComponent} from './groups/group-list/group-list.component';
import {UserAddComponent} from './users/user-add/user-add.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    SearchInputComponent,
    GroupListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
