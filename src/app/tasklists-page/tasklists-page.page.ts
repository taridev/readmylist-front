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

  lists: TaskList[] = [];
  todo = new TaskList();

  constructor(private route: ActivatedRoute, private router: Router, private service: TaskListService) { }

  ngOnInit() {
  }

  /**
   * Méthode d'ajout de TaskList
   * Si newTaskList.title n'est pas vide alors on renseigne les champs de newTaskList
   * et on crée task en BDD
   */
  onCreateClick() {
    if (this.todo.title != null && this.todo.title !== '') {
      // Initialisation de la nouvelle tâche (avec id = null)
      this.todo = new TaskList({
        title: this.todo.title,
        creationDate: new Date(),
        tasks: []});
      this.service
          .create(this.todo)
          .subscribe(tasklist => {
            this.lists.push(tasklist);
            this.router.navigate(['tasks-page/' + tasklist.id]);
          });
    }
  }
}
