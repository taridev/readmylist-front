import {Component, OnInit} from '@angular/core';
import {TaskListMockService} from '../services/task-list-mock.service';
import {TaskList} from '../model/task-list';
import {ActivatedRoute} from '@angular/router';
import {TaskListService} from "../services/TaskListService";
import {Task} from "../model/task";

@Component({
    selector: 'app-tasks-page',
    templateUrl: './tasks-page.page.html',
    styleUrls: ['./tasks-page.page.scss'],
})
export class TasksPagePage implements OnInit {

    tasklist: TaskList;
    newTask = new Task();

    constructor(private route: ActivatedRoute, private service: TaskListService) {
    }

    ngOnInit() {
      this.service
          .getById(1)
          .subscribe(result => this.tasklist = new TaskList(result));
    }

    /**
     * Méthode d'ajout de task
     * Si newTask.title n'est pas vide alors on renseigne les champs de newTask
     * et on crée task en BDD
     */
    onClickAddTask() {
        console.log('click');
        if (this.newTask.title != null && this.newTask.title != '') {
            this.newTask.priorize = false;
            this.newTask.done = false;
            this.newTask.creationDate = new Date();
            this.newTask.dueDate = null;
            const task = this.service.addTask(this.tasklist, this.newTask);
            if (task) {
                this.tasklist.tasks.push(task);
                this.newTask = new Task();
            }
        }
    }

    /**
     * Méthode de mise à jour du champ priorize
     * Inverse la valeur du champs 'priorize' et update task en BD
     * @param task
     */
    togglePriorize(task: Task) {
      // TODO: implémenter togglePriorize
    }

    /**
     * Inverse la valeur du champs 'done' et update task en BD
     * @param task
     */
    toggleDone(task: Task) {
        // TODO: inverser la valeur de done et update task
    }


}
