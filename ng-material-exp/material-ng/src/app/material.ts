import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, FlexLayoutModule, HttpClientModule, HttpModule, FormsModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, FlexLayoutModule, HttpClientModule, HttpModule, FormsModule],
  })
  export class MaterialModule { }
