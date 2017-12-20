import { Component, OnInit } from '@angular/core';
import { CarHistoryService } from '../../services/car-history.service'
import { CarHistory } from '../../models/car-history';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-car-history',
  templateUrl: './car-history.component.html',
  styleUrls: ['./car-history.component.css']
})
export class CarHistoryComponent implements OnInit {
  public carHistory: CarHistory[];
  public carKey: string;

  constructor(private carHistoryService: CarHistoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carKey = params['key']
    })

    this.carHistoryService.getCarHistory(this.carKey).subscribe(
      carHistory => this.carHistory = carHistory
    );
  }
}
