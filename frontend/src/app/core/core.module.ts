import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalRService } from './services/signal-r.service';



@NgModule({
	declarations: [],
	imports: [
		CommonModule
	],
	providers: [
		SignalRService
	]
})
export class CoreModule { }
