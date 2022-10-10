import { Component, OnInit } from '@angular/core';
import { BookTable } from '../book-table';
import { BooktableService } from '../booktable.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})
export class BooktableComponent implements OnInit {
booktable:BookTable=new BookTable();

  constructor(private booktableservice: BooktableService) { }

  ngOnInit(): void {
  }

  bookTable(){
    console.log(this.booktable);
    this.booktableservice.booktable(this.booktable).subscribe(data=>{
      alert("Successfully Table Is Book")
    }, error=>alert("Sorry Ur Table Is Not Book"));
  }

}
