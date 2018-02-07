import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleAppBlogModule } from './blog/blog.module';
import { JhipsterSampleAppEntryModule } from './entry/entry.module';
import { JhipsterSampleAppTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterSampleAppBlogModule,
        JhipsterSampleAppEntryModule,
        JhipsterSampleAppTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleAppEntityModule {}
