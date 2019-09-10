import {Component, OnInit} from '@angular/core';
import {TaskList} from '../model/task-list';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskListService} from '../services/TaskListService';
import {DataService} from '../services/data.service';
import {Task} from '../model/task';

@Component({
  selector: 'app-tasklists-page',
  templateUrl: './tasklists-page.page.html',
  styleUrls: ['./tasklists-page.page.scss'],
})
export class TasklistsPagePage implements OnInit {
  lists: TaskList[];
  newList = new TaskList();

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private router: Router,
              private service: TaskListService) { }

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
            this.dataService.setData(listFromServer.id, listFromServer);
            this.router.navigate(['list/' + listFromServer.id]);
          });
    }
  }
  goToList(tasklist: TaskList) {
    this.dataService.setData(tasklist.id, tasklist);
    this.router.navigate(['list/' + tasklist.id], );
  }
  /**
   * Méthode de suppression de task dans list
   * service
   */
  onDeleteClick(service: TaskList) {
    this.service
        .delete(service.id)
        .subscribe(() =>
            this.popTaskList(service)
        );
  }

  /**
   * Supprime de la liste la tâche passée en paramètre
   * @param service la tâche à supprimer
   */
  private popTaskList(service: TaskList) {
    for (let i = 0; i < this.lists.length; i++) {
      if (this.lists[i].id === service.id) {
        this.lists.splice(i, 1);
        break;
      }
    }
  }
}
