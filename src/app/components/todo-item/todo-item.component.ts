import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | any;

  constructor() { }

  ngOnInit(): void {
  }

}
