import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Services {
  entrepots = [
    { id: 1, libelle: "ACIPAC YOP", superficie: 3000, placer: "YOP ZONE industrielle" },
    { id: 2, libelle: "ACIPAC YOP", superficie: 3000, placer: "YOP ZONE industrielle" },
    { id: 3, libelle: "ACIPAC YOP", superficie: 3000, placer: "YOP ZONE industrielle" },
    { id: 4, libelle: "ACIPAC YOP", superficie: 3000, placer: "YOP ZONE industrielle" }
  ];


  addEntrepot(tableau: any) {
    return this.entrepots.push(tableau)
  };

}