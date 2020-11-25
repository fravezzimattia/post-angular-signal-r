import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalRService } from './services/signal-r.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		HttpClientModule
	],
	providers: [
		SignalRService
	]
})
export class CoreModule { }
