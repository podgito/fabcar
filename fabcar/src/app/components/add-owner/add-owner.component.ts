import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddOwnerService } from '../../services/add-owner.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  public carKey: string;

  constructor(private addOwnerService: AddOwnerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carKey = params['key']
    })
  }

  addOwner(form: NgForm) {    
    this.addOwnerService.addOwner(this.carKey, form.value.owner).subscribe(res => console.log(res));
  }
}
