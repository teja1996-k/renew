import { DocumentsComponent } from "./documents/documents.component";
import { ReviewFormComponent } from "./review-form/review-form.component";
import { IncomeAndOthersComponent } from "./income-and-others/income-and-others.component";
import { OnboardingFormComponent } from "./onboarding-form/onboarding-form.component";
import { PrimaryInformationComponent } from "./primary-information/primary-information.component";
import { LoanDetailsComponent } from "./loan-details/loan-details.component";
import { Header1Component } from "./header1/header1.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { FormComponent } from "./form/form.component";
import { CustomerOnboardingFormComponent } from "./customer-onboarding-form/customer-onboarding-form.component";
/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardBpm, AuthGuardEcm } from "@alfresco/adf-core";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AppsComponent } from "./apps/apps.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { DocumentlistComponent } from "./documentlist/documentlist.component";
import { StartProcessComponent } from "./start-process/start-process.component";
import { AppLayoutComponent } from "./app-layout/app-layout.component";
import { FileViewComponent } from "./file-view/file-view.component";
import { BlobViewComponent } from "./file-view/blob-view.component";
import { ApplicationIdComponent } from "./application-id/application-id.component";
import { EditIncomeComponent } from "./edit-income/edit-income.component";
import { OtpSampleComponent } from "./otp-sample/otp-sample.component";
import { EligibiltyComponent } from "./eligibilty/eligibilty.component";

export const appRoutes: Routes = [
  {
    path: "files/:nodeId/view",
    component: FileViewComponent,
    canActivate: [AuthGuardEcm],
    outlet: "overlay"
  },
  {
    path: "preview/blob",
    component: BlobViewComponent,
    outlet: "overlay",
    pathMatch: "full"
  },

  {
    path: "",
    redirectTo: "primary",
    pathMatch: "full"
  },
  {
    path: "primary",
    component: OnboardingFormComponent
  },
  {
    path: "income",
    component: IncomeAndOthersComponent
  },
  {
    path: "documents",
    component: DocumentsComponent
  },
  {
    path: "review",
    component: ReviewFormComponent
  },
  {
    path: "editincome",
    component: EditIncomeComponent
  },
  {
    path: "otpsample",
    component: OtpSampleComponent
  },
  {
    path:"eligibility",
    component: EligibiltyComponent
  },
  {
    path: "form",
    component: FormComponent
  },
  {
    path: "customer",
    component: CustomerOnboardingFormComponent
  },
  {
    path: "applicationId",
    component: ApplicationIdComponent
  },
  {
    path: "sidenav",
    component: SidenavComponent,
    children: [
      {
        path: "",
        redirectTo: "underwriter",
        pathMatch: "full"
      },
      {
        path: "csr",
        component: FormComponent
      },
      {
        path: "underwriter",
        component: FormComponent
      },
      {
        path: "linemanager",
        component: FormComponent
      },
      {
        path: "contractor",
        component: FormComponent
      }
    ]
  },
  // {
  //   path: "",
  //   component: AppLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       component: CustomerOnboardingFormComponent
  //     },
  //     {
  //       path: "home",
  //       component: HomeComponent
  //     },

  //     {
  //       path: "apps",
  //       component: AppsComponent,
  //       canActivate: [AuthGuardBpm]
  //     },
  //     {
  //       path: "apps/:appId/tasks",
  //       component: TasksComponent,
  //       canActivate: [AuthGuardBpm]
  //     },
  //     {
  //       path: "apps/:appId/tasks/:taskId",
  //       component: TaskDetailsComponent,
  //       canActivate: [AuthGuardBpm]
  //     },
  //     {
  //       path: "apps/:appId/start-process",
  //       component: StartProcessComponent,
  //       canActivate: [AuthGuardBpm]
  //     },
  //     {
  //       path: "documentlist",
  //       component: DocumentlistComponent,
  //       canActivate: [AuthGuardEcm]
  //     }
  //   ]
  // },
  {
    path: "login",
    component: LoginComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
