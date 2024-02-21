import { Component} from '@angular/core';
import {products} from '../products'; 
import {Router} from '@angular/router'; 
import { share } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [...products]; 

  constructor(private router: Router) {}

  redirect(link: string) {
    window.location.href= "https://t.me/share/url?url=" + link + "&text=Check out the product"; 
  }

}
