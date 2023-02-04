import {NgModule} from '@angular/core';
import {FileSizePipe} from '@app/shared/pipes/file-size';

@NgModule({
  declarations: [FileSizePipe],
  exports: [FileSizePipe],
  })
export class PipesModule {}
