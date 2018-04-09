import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ErrorComponent } from "./shared/error/error.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '**',
                component: ErrorComponent
            }
        ])
    ],
     declarations: [ErrorComponent]
})
export class WildcardRoutingModule { }