import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, FlexLayoutModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, FlexLayoutModule],
  })
  export class MaterialModule { }
