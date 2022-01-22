import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersRoutingModule } from "./users-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersAddComponent } from "./users-add/users-add.component";
import { UsersEditComponent } from "./users-edit/users-edit.component";
import { HighlightDirective } from "./users-list/highlight.directive";
import { RandomColorsDirective } from "./users-list/random-color.directive";
import { Sum } from "./users-list/sum.pipe";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { StoreModule } from "@ngrx/store";
import { reducers } from "src/app/store/store";
import { CounterComponent } from "./counter/counter.component";
import { EffectsModule } from "@ngrx/effects";
import { HttpClientModule } from "@angular/common/http";
import { TodosEffect } from "src/app/store/effects/todo.effect";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { VideoChatComponent } from "./video-chat/video-chat.component";
import { FormsModule } from '@angular/forms';
import { ZoomChatComponent } from './zoom-chat/zoom-chat.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersAddComponent,
    UsersEditComponent,
    HighlightDirective,
    RandomColorsDirective,
    Sum,
    TodoListComponent,
    CounterComponent,
    VideoChatComponent,
    ZoomChatComponent,
    PaymentComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TodosEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
  ],
})
export class UsersModule {}
