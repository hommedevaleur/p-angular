import { Component, OnInit } from '@angular/core';
import { Services } from '../services/services.component';
import { Router } from '@angular/router';
declare var window: any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private entrepot: Services) { };
  form = {
    libelle: null,
    superficie: null,
    placer: null
  };
  formModal: any;

  tab: any;
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("exampleModal")
    );
    this.tab = this.entrepot.entrepots;
  }


  onYes() {
    let id = this.entrepot.entrepots.length;
    this.entrepot.addEntrepot({ id: id, libelle: this.form.libelle, superficie: this.form.superficie, placer: this.form.placer })
    this.tab = this.entrepot.entrepots;
    alert("Entrepot bien ajouté");
    this.formModal.hide();
    this.router.navigate(['dashboard']);
  }
  onNo() {
    this.formModal.hide();
  }

  onBack() {
    this.router.navigate(['dashboard']);
  }

  onModal() {
    this.formModal.show();
  }

}
