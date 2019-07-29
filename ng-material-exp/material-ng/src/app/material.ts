import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, FlexLayoutModule, HttpClientModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, FlexLayoutModule, HttpClientModule],
  })
  export class MaterialModule { }
