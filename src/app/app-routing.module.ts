import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RootContextFlags } from '@angular/core/src/render3/interfaces/view';

const routes: Routes = [
  { path : '', loadChildren: './home/home.module#HomePageModule'},
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  { path: 'git', loadChildren: './pages/git/git.module#GitPageModule' },
  { path: 'version', loadChildren: './pages/git/version/version.module#VersionPageModule' },
  { path: 'vsc', loadChildren: './pages/git/vsc/vsc.module#VscPageModule' },
  { path: 'rep', loadChildren: './pages/git/rep/rep.module#RepPageModule' },
  { path: 'github', loadChildren: './pages/git/github/github.module#GithubPageModule' },
  { path: 'tracking', loadChildren: './pages/git/tracking/tracking.module#TrackingPageModule' },
  { path: 'commit', loadChildren: './pages/git/commit/commit.module#CommitPageModule' },
  { path: 'cloning', loadChildren: './pages/git/cloning/cloning.module#CloningPageModule' },
  { path: 'pulling', loadChildren: './pages/git/pulling/pulling.module#PullingPageModule' },
  { path: 'reset', loadChildren: './pages/git/reset/reset.module#ResetPageModule' },
  { path: 'branches', loadChildren: './pages/git/branches/branches.module#BranchesPageModule' },
  { path: 'amend', loadChildren: './pages/git/amend/amend.module#AmendPageModule' },
  { path: 'stash', loadChildren: './pages/git/stash/stash.module#StashPageModule' },
  { path: 'merging', loadChildren: './pages/git/merging/merging.module#MergingPageModule' },
  { path: 'conflicts', loadChildren: './pages/git/conflicts/conflicts.module#ConflictsPageModule' },
  { path: 'angular', loadChildren: './pages/angular/angular.module#AngularPageModule' },
  { path: 'bootstrap', loadChildren: './pages/bootstrap/bootstrap.module#BootstrapPageModule' },
  { path: 'introduction', loadChildren: './pages/angular/introduction/introduction.module#IntroductionPageModule' },
  { path: 'expressions', loadChildren: './pages/angular/expressions/expressions.module#ExpressionsPageModule' },
  { path: 'binding', loadChildren: './pages/angular/binding/binding.module#BindingPageModule' },
  { path: 'directives', loadChildren: './pages/angular/directives/directives.module#DirectivesPageModule' },
  { path: 'controllers', loadChildren: './pages/angular/controllers/controllers.module#ControllersPageModule' },
  { path: 'events', loadChildren: './pages/angular/events/events.module#EventsPageModule' },
  { path: 'to-do', loadChildren: './pages/angular/to-do/to-do.module#ToDoPageModule' },
  { path: 'intro', loadChildren: './pages/bootstrap/intro/intro.module#IntroPageModule' },
  { path: 'grid', loadChildren: './pages/bootstrap/grid/grid.module#GridPageModule' },
  { path: 'typography', loadChildren: './pages/bootstrap/typography/typography.module#TypographyPageModule' },
  { path: 'table', loadChildren: './pages/bootstrap/table/table.module#TablePageModule' },
  { path: 'images', loadChildren: './pages/bootstrap/images/images.module#ImagesPageModule' },
  { path: 'buttons', loadChildren: './pages/bootstrap/buttons/buttons.module#ButtonsPageModule' },
  { path: 'forms', loadChildren: './pages/bootstrap/forms/forms.module#FormsPageModule' },
  { path: 'dropdowns', loadChildren: './pages/bootstrap/dropdowns/dropdowns.module#DropdownsPageModule' },
  { path: 'progress-bar', loadChildren: './pages/bootstrap/progress-bar/progress-bar.module#ProgressBarPageModule' },
  { path: 'jumbotron', loadChildren: './pages/bootstrap/jumbotron/jumbotron.module#JumbotronPageModule' },
  { path: 'alerts', loadChildren: './pages/bootstrap/alerts/alerts.module#AlertsPageModule' },
  { path: 'wells', loadChildren: './pages/bootstrap/wells/wells.module#WellsPageModule' },
  { path: 'badges', loadChildren: './pages/bootstrap/badges/badges.module#BadgesPageModule' },
  { path: 'media-object', loadChildren: './pages/bootstrap/media-object/media-object.module#MediaObjectPageModule' },
  { path: 'carousel', loadChildren: './pages/bootstrap/carousel/carousel.module#CarouselPageModule' },
  { path: 'modal', loadChildren: './pages/bootstrap/modal/modal.module#ModalPageModule' },
  { path: 'affix', loadChildren: './pages/bootstrap/affix/affix.module#AffixPageModule' },
  { path: 'button-groups', loadChildren: './pages/bootstrap/button-groups/button-groups.module#ButtonGroupsPageModule' },
  { path: 'list-groups', loadChildren: './pages/bootstrap/list-groups/list-groups.module#ListGroupsPageModule' },
  { path: 'panel', loadChildren: './pages/bootstrap/panel/panel.module#PanelPageModule' },
  { path: 'collapsible', loadChildren: './pages/bootstrap/collapsible/collapsible.module#CollapsiblePageModule' },
  { path: 'pagination', loadChildren: './pages/bootstrap/pagination/pagination.module#PaginationPageModule' },
  { path: 'breadcrumbs', loadChildren: './pages/bootstrap/breadcrumbs/breadcrumbs.module#BreadcrumbsPageModule' },
  { path: 'navigation', loadChildren: './pages/bootstrap/navigation/navigation.module#NavigationPageModule' },
  { path: 'pager', loadChildren: './pages/bootstrap/pager/pager.module#PagerPageModule' },
  { path: 'scrollspy', loadChildren: './pages/bootstrap/scrollspy/scrollspy.module#ScrollspyPageModule' },
  { path: 'machine', loadChildren: './pages/machine/machine.module#MachinePageModule' },
  { path: 'mongodb', loadChildren: './pages/mongodb/mongodb.module#MongodbPageModule' },
  { path: 'intro-machine', loadChildren: './pages/machine/intro-machine/intro-machine.module#IntroMachinePageModule' },
  { path: 'types', loadChildren: './pages/machine/types/types.module#TypesPageModule' },
  { path: 'neural', loadChildren: './pages/machine/neural/neural.module#NeuralPageModule' },
  { path: 'maths', loadChildren: './pages/machine/maths/maths.module#MathsPageModule' },
  { path: 'patterns', loadChildren: './pages/machine/patterns/patterns.module#PatternsPageModule' },
  { path: 'setup', loadChildren: './pages/mongodb/setup/setup.module#SetupPageModule' },
  { path: 'mongoose', loadChildren: './pages/mongodb/mongoose/mongoose.module#MongoosePageModule' },
  { path: 'set-up-mongoose', loadChildren: './pages/mongodb/set-up-mongoose/set-up-mongoose.module#SetUpMongoosePageModule' },
  { path: 'add-database-setup', loadChildren: './pages/mongodb/add-database-setup/add-database-setup.module#AddDatabaseSetupPageModule' },
  { path: 'mongodb-model', loadChildren: './pages/mongodb/mongodb-model/mongodb-model.module#MongodbModelPageModule' },
  { path: 'model-code', loadChildren: './pages/mongodb/model-code/model-code.module#ModelCodePageModule' },
  { path: 'scale', loadChildren: './pages/mongodb/scale/scale.module#ScalePageModule' },
  { path: 'sql-mongo', loadChildren: './pages/mongodb/sql-mongo/sql-mongo.module#SqlMongoPageModule' },
  { path: 'mongo-shell', loadChildren: './pages/mongodb/mongo-shell/mongo-shell.module#MongoShellPageModule' },
  { path: 'notification', loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'html', loadChildren: './pages/html/html.module#HtmlPageModule' },
  { path: 'overview', loadChildren: './pages/html/overview/overview.module#OverviewPageModule' },
  { path: 'available-course', loadChildren: './available-course/available-course.module#AvailableCoursePageModule' },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports:
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
