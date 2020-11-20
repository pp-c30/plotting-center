import { Component, OnInit } from '@angular/core';

import { GramajeService } from "../../services/gramaje.service";

@Component({
  selector: 'app-gramaje',
  templateUrl: './gramaje.component.html',
  styleUrls: ['./gramaje.component.css']
})
export class GramajeComponent implements OnInit {

  listgramajes=[];

  constructor(private gramajeserv:GramajeService) { 


  }

  ngOnInit(): void {

    this.listargramajes();
  }

  listargramajes(){

    this.gramajeserv.getgramaje().subscribe(
      resultado => this.listgramajes = resultado,
      error=> console.log(error)
    )

  }

}
