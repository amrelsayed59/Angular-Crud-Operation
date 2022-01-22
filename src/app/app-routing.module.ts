import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./shared/components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { NotfoundComponent } from "./shared/components/notfound/notfound.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/admin",
    pathMatch: "full",
  },


  // {
  //   path: "",
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: "posts",
  //       loadChildren: () =>
  //         import("./views/posts/posts.module").then(m => m.PostsModule)
  //     }
  //   ]
  // },

  {
    path: "auth",
    component: AuthLayoutComponent,
    children: [
     {
      path: '',
      loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
     }
    ]
  },

  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
        import("./views/dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "posts",
        loadChildren: () =>
          import("./views/posts/posts.module").then((m) => m.PostsModule),
      },
      {
        path: "users",
        loadChildren: () =>
          import("./views/users/users.module").then((m) => m.UsersModule),
      },
      {
        path: "calendar",
        loadChildren: () =>
          import("./views/users/calendar-module/calendar-module.module").then((m) => m.CalendarModuleModule),
      },
      {
        path: "draggable-cards",
        loadChildren: () =>
          import("./shared/modules/draggable-cards/draggable-cards.module").then((m) => m.DraggableCardsModule),
      },
    ],
  },

  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: 'notes',
        loadChildren: () => import('./views/notes/notes.module').then(m => m.NotesModule)
      }
    ]
  },

  { path: "**", component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
