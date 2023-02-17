# Angular Basics

## Angular.json Structure
The `angular.json` file is used to configure various aspects of an Angular project, including the build process, project structure, and global styles. It is a JSON file that consists of several different sections, including:

- `version`: the version of Angular being used by the project
- `newProjectRoot`: the root directory of a new project
- `projects`: an object containing configurations for each project in the workspace
- `defaultProject`: the default project to use when a command is run without specifying a project
- `schematics`: configuration options for the Angular CLI's schematic system

## Code Scaffolding
Angular CLI provides multiple ways to generate code in your project. Here are a few examples:
In this project by default they create a template inside the component with `inlineTemplate` and export to the local route.


- `ng generate component component-name`: generates a new component
- `ng generate service service-name`: generates a new service
- `ng generate directive directive-name`: generates a new directive
- `ng generate pipe pipe-name`: generates a new pipe
- `ng generate class class-name`: generates a new class
- `ng generate interface interface-name`: generates a new interface
- `ng generate enum enum-name`: generates a new enum
- `ng generate module module-name`: generates a new module

## Routing Management
Angular provides powerful routing management that allows you to navigate through your application easily. You can define routes for your application, and the Angular router will map those routes to specific components.

### Eager Loaded Module
In Angular, an eager loaded module is a module that is loaded immediately when the application starts. When the module is loaded, all the components defined in that module are also loaded.

To define a route for an eager loaded module, you need to add a path to the `RouterModule.forRoot()` method in the app.module.ts file. For example:

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
```

In this example, the HomeComponent will be loaded when the user navigates to the home route, and the AboutComponent will be loaded when the user navigates to the about route.

### Lazy Loaded Module
A lazy loaded module is a module that is loaded on demand, only when the user navigates to a route that requires that module. This can significantly reduce the initial load time of your application.

To define a route for a lazy loaded module, you need to use the loadChildren property in the Routes array. For example:

```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
```
In this example, the AdminModule will be loaded when the user navigates to the admin route. The loadChildren property uses the import() function to load the module on demand.
