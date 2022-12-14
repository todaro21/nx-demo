import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LayoutComponent, HeaderComponent, AsideComponent],
  exports: [LayoutComponent, HeaderComponent, AsideComponent],
})
export class SharedModule {}
