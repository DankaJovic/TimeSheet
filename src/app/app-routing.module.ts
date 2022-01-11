import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'index',
        loadChildren: () =>
        import('./time-sheet/time-sheet.module').then(m => m.TimeSheetModule)
    },
    {
        path: 'clients', 
        loadChildren: () =>
        import('./clients/clients.module').then(m => m.ClientsModule)
    },
    {
        path: 'projects',
        loadChildren: () =>
        import('./projects/projects.module').then(m => m.ProjectsModule)
    },
    {
        path: 'categories',
        loadChildren: () =>
        import('./categories/categories.module').then(m => m.CategoriesModule)
    },
    {
        path: 'team-members',
        loadChildren: () =>
        import('./team-members/team-members.module').then(m => m.TeamMembersModule)
    },
    {
        path: 'reports',
        loadChildren: () =>
        import('./reports/reports.module').then(m => m.ReportsModule)
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }