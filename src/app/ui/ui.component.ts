import { Component, OnInit } from '@angular/core';
import { Service1Service  } from '../service-1.service';
import {Service2Service  } from '../service-2.service';

import { User } from '../user';
import { Repositories  } from '../repositories';
import { from } from 'rxjs';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
