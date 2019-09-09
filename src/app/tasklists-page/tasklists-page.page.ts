import { Component, OnInit } from '@angular/core';
import {TaskList} from '../model/task-list';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskListService} from '../services/TaskListService';

@Component({
  selector: 'app-tasklists-page',
  templateUrl: './tasklists-page.page.html',
  styleUrls: ['./tasklists-page.page.scss'],
})
export class TasklistsPagePage implements OnInit {

  lists: TaskList[];
  newList = new TaskList();

  constructor(private route: ActivatedRoute, private router: Router, private service: TaskListService) { }

  ngOnInit() {
    this.service
        .getAll()
        .subscribe(lists =>
            this.lists = lists
    );
  }

  /**
   * Méthode d'ajout de TaskList
   * Si newTaskList.title n'est pas vide alors on renseigne les champs de newTaskList
   * et on crée task en BDD
   */
  onCreateClick() {
    if (this.newList.title != null && this.newList.title !== '') {
      // Initialisation de la nouvelle list (avec id = null)
      this.newList = new TaskList({
        title: this.newList.title,
        creationDate: new Date(),
        tasks: []});
      this.service
          .create(this.newList)
          .subscribe(listFromServer => {
            this.lists.push(listFromServer);
            this.router.navigate(['tasks-page/' + listFromServer.id]);
          });
    }
  }
}
