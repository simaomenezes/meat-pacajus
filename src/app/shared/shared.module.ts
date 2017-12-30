import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { InputComponent } from 'app/shared/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({

    declarations:[InputComponent, RadioComponent, RatingComponent],
    imports:[FormsModule, ReactiveFormsModule, CommonModule],
    exports: [InputComponent, RadioComponent, RatingComponent,
        FormsModule, ReactiveFormsModule, CommonModule]
})

export class SharedModule{}