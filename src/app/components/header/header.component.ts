import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public totalItem: number = 0;

  constructor(private router: Router) {}

  allerVersMonCompte(): void {
    // Redirigez l'utilisateur vers la page "Mon Compte"
    this.router.navigate(['/mon-compte']);
  }
}
