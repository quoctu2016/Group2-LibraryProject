import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MuonsachDialogComponent } from '../../dialogs/muonsach-dialog/muonsach-dialog.component';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  states: User[];
  // constructor() { }
  constructor(private dialog:MatDialog,private userService:UserService) {
    this.stateCtrl = new FormControl();
    this.userService.getAllUser().subscribe(user=>{
      this.states = user;
      this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
    })
    
  }
  ngOnInit() {
  }
  muonsachdialog(){
    let dialogRef = this.dialog.open(MuonsachDialogComponent,{
      panelClass: 'myClass',
      width:"100%",
      height:"100%",
      maxWidth:'100vw'
    })
  }
  stateCtrl: FormControl;
  filteredStates: Observable<User[]>;


  

  filterStates(name: string) {
    return this.states.filter(state =>
      state.MemberCode.toString().toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

}
