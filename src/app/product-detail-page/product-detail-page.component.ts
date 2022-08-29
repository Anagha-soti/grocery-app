import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
import{ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  product: any;
  id:any;

  constructor(private dataService: DataService,private activatedRoute:ActivatedRoute) { 
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getProductById(this.id).subscribe((response: any) => {
      this.product = response.data;
    })
  }

  ngOnInit(): void {
  }

}
