import {Component, OnInit} from '@angular/core';
import {TaskListMockService} from '../services/task-list-mock.service';
import {TaskList} from '../model/task-list';
import {ActivatedRoute} from '@angular/router';
import {TaskListService} from "../services/TaskListService";
import {Task} from "../model/task";
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
    selector: 'app-tasks-page',
    templateUrl: './tasks-page.page.html',
    styleUrls: ['./tasks-page.page.scss'],
})
export class TasksPagePage implements OnInit {

    list: TaskList;
    todo = new Task();

    constructor(private route: ActivatedRoute, private service: TaskListService, private modalController: ModalController) {
    }

    ngOnInit() {
        // Chargement de list
        this.service
            .getById(1)
            .subscribe(result =>
                this.list = new TaskList(result));
    }

    async openModal(task: Task) {
      const modal = await this.modalController.create({
        component: ModalPage,
        componentProps: {
          task: task
        }
      });
      modal.present();

    }


    /**
     * Méthode d'ajout de task
     * Si newTask.title n'est pas vide alors on renseigne les champs de newTask
     * et on crée task en BDD
     */
    onAddClick() {
        if (this.todo.title != null && this.todo.title != '') {
            this.todo.priorize = false;
            this.todo.done = false;
            this.todo.creationDate = new Date();
            this.todo.dueDate = null;
            const task = this.service.addTask(this.list, this.todo);
            if (task) {
                this.list.tasks.push(task);
                this.todo = new Task();
            }
        }
    }

    /**
     * Méthode de mise à jour du champ 'priorize'
     * Inverse la valeur du champs 'priorize' et update task en BD
     * @param task
     */
    togglePriorize(task: Task) {
        // TODO: implémenter togglePriorize
        // lance l'update du service task
        console.log("Priorize");
    }

    /**
     * Méthode de mise à jour du champ 'done'
     * Inverse la valeur du champs 'done' et update task en BD
     * @param task
     */
    toggleDone(task: Task) {
        // TODO: inverser la valeur de done et update task
        console.log("Done");
    }

    /**
     * Méthode de suppression de task dans list
     * @param task
     */
    onDeleteClick(task: Task) {
        // TODO: supprimer la tâche
        console.log("Delete");
    }

    


}
