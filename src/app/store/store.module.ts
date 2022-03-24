import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { FormsModule } from '@angular/forms';
import { CountDirective } from './count.directive';

@NgModule({
  declarations: [StoreComponent, CountDirective],
  exports: [StoreComponent],
  imports: [CommonModule, ModelModule, FormsModule],
})
export class StoreModule {}
