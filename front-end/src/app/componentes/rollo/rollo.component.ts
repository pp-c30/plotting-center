import { Component, OnInit } from '@angular/core';
import { RolloService } from "../../services/rollo.service";

@Component({
  selector: 'app-rollo',
  templateUrl: './rollo.component.html',
  styleUrls: ['./rollo.component.css']
})
export class RolloComponent implements OnInit {

  listRollo = [];

  constructor(private rolloServ:RolloService) {

   }

  ngOnInit(): void {
    this.listarRollo
  }


  listarRollo()
  {
  this.rolloServ.getRollo().subscribe(
     resultado => this.listRollo = resultado,
     error => console.log(error)
  )
  }
}

