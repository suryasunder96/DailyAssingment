import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() title:string;
  @Input() author:string;
  @Input() publisher:string;
 @Output() sentBook:EventEmitter<any>=new EventEmitter();

  selectBook()
{
  let selectedbook:any={stitle:this.title,
  sauthor:this.author,spublisher:this.publisher};
  this.sentBook.emit(selectedbook);
}
  constructor() { }

  ngOnInit() {
  }

}
