import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatorService } from '../core/translator/translator.service';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';

import { menu } from './menu';
import { routes } from './routes';
import { MehdiComponent } from './mehdi/mehdi/mehdi.component';
import { MoroccoComponent } from './Morocco/morocco/morocco.component';
import { SpainComponent } from './Spain/spain/spain.component';
import { PortugalComponent } from './Portugal/portugal/portugal.component';
import { FranceComponent } from './France/france/france.component';
import { BelgiumComponent } from './Belgium/belgium/belgium.component';
import { OhioComponent } from './Usa/Ohio/ohio/ohio.component';
import { ColoradoComponent } from './Usa/colorado/colorado.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        PagesModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class FeaturesModule {
    constructor(public menuService: MenuService, tr: TranslatorService) {
        menuService.addMenu(menu);
    }
}
