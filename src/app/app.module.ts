import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { basichighlightdirective } from './basic-highlight/basic-highlight.directive';
import { HighlightDirectiveDirective } from './basic-highlight/highlight-directive.directive';
import { UnlessDirective } from './basic-highlight/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    basichighlightdirective,
    HighlightDirectiveDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
