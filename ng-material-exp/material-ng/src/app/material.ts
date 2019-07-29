import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, FlexLayoutModule, MatIconModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, FlexLayoutModule, MatIconModule],
  })
  export class MaterialModule { }
