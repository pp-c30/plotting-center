import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { GramajeService } from "../../services/gramaje.service";
import { Igramaje } from "src/app/models/gramaje";

@Component({
  selector: 'app-gramaje',
  templateUrl: './gramaje.component.html',
  styleUrls: ['./gramaje.component.css']
})
export class GramajeComponent implements OnInit {

  listgramajes=[];

  constructor(private gramajeserv:GramajeService) { }

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
