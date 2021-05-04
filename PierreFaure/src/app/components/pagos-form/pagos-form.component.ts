import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-pagos-form',
  templateUrl: './pagos-form.component.html',
  styleUrls: ['./pagos-form.component.css']
})
export class PagosFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.router.navigate(['admin']);
  }
}
