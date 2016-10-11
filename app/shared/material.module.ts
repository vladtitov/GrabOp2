/**
 * Created by Vlad on 9/10/2016.
 */
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdCoreModule } from '@angular2-material/core';
import { MdInputModule } from '@angular2-material/input';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';


@NgModule({
  imports:[
  //  MdCoreModule

  ]
  ,exports:[
    MdCoreModule,
   MdCheckboxModule,
  //  MdButtonModule
   //MdInputModule
   // MdProgressCircleModule,
    // MdToolbarModule
  ]
})
export class MaterialModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialModule,
      providers: [
      ]
    };
  }

}
