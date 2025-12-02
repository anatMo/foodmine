import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  // Inputs matching the tutorial's API
  @Input() value = 0;
  @Input() totalstars = 5;
  @Input() checkedcolor = '#ffc107';
  @Input() uncheckedcolor = '#ddd';
  @Input() size = '1.5rem';
  @Input() readonly = false;

  // Output for two-way binding if needed
  @Output() valueChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalstars']) {
      this.totalstars = Number(this.totalstars) || 5;
    }
    if (changes['value']) {
      this.value = Number(this.value) || 0;
    }
  }

  stars(): number[] {
    return Array.from({ length: this.totalstars }, (_, i) => i + 1);
  }

  setRating(value: number) {
    if (this.readonly) {
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
  }
}
