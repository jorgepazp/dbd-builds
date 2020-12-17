import { Component, OnInit } from '@angular/core';
import { DbdApiService } from 'src/services/dbd-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[DbdApiService]
})
export class AppComponent implements OnInit{
  title = 'dbd-builds';
  constructor(private dbdapi:DbdApiService){

  }

  ngOnInit(){
    /*this.dbdapi.getPerks().subscribe(res=>{
      console.log(res);
    });*/
  }
}
