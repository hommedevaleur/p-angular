import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../services/services.component';

declare var window: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private e: Services) { };



  menu = [
    { id: 1, title: "Campagnes", val: 12 },
    { id: 2, title: "Détails campagne", val: 12 },
    { id: 3, title: "Spéculation", val: 12 },
    { id: 4, title: "Détails spéculation", val: 12 },
    { id: 5, title: "Entrepot", val: 12 },
    { id: 6, title: "Groupement", val: 12 },
  ];

  entrepots = this.e.entrepots;
  etat = 'show';
  formModal: any;

  ngOnInit(): void {

  }

  onEntrepot() {
    this.router.navigate(['signup']);
  }

}
