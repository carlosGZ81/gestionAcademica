import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { GestionAcademicaSharedModule, UserRouteAccessService } from './shared';
import { GestionAcademicaAppRoutingModule} from './app-routing.module';
import { GestionAcademicaHomeModule } from './home/home.module';
import { GestionAcademicaAdminModule } from './admin/admin.module';
import { GestionAcademicaAccountModule } from './account/account.module';
import { GestionAcademicaEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        GestionAcademicaAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        GestionAcademicaSharedModule,
        GestionAcademicaHomeModule,
        GestionAcademicaAdminModule,
        GestionAcademicaAccountModule,
        GestionAcademicaEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class GestionAcademicaAppModule {}
