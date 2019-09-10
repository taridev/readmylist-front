import {Component, OnInit} from '@angular/core';
import {TaskList} from '../../models/task-list';
import {ActivatedRoute} from '@angular/router';
import {TaskListService} from '../../services/TaskListService';
import {Task} from '../../models/task';
import {ModalController} from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import {TaskService} from '../../services/TaskService';

@Component({
    selector: 'app-tasks-page',
    templateUrl: './tasks-page.page.html',
    styleUrls: ['./tasks-page.page.scss'],
})
export class TasksPagePage implements OnInit {

    list = new TaskList();
    todo = new Task();
    id: number;

    constructor(
        private route: ActivatedRoute,
        private listService: TaskListService,
        private taskService: TaskService,
        private modalController: ModalController
    ) {
    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.listService
            .getById(this.id)
            .subscribe(list => this.list = list);

    }

    async openModal(task: Task) {
        const modal = await this.modalController.create({
            component: ModalPage,
            componentProps: {
                task: task
            }
        });

        // Récupération des données fournies par la modal
        modal.onDidDismiss().then(dataFromModal => {
            if (dataFromModal !== null) {
                const fromModal = dataFromModal.data;
                this.taskService
                // Mise à jour de la Task
                    .update(fromModal)
                    .subscribe(dataFromServer => {
                            // Mise à jour de la tâche affichée
                            // avec les valeurs retournées par le serveur
                            task.id = dataFromServer.id;
                            task.priorize = dataFromServer.priorize;
                            task.title = dataFromServer.title;
                            task.done = dataFromServer.done;
                            task.dueDate = dataFromServer.dueDate;
                            task.creationDate = dataFromServer.creationDate;
                        }
                    );
            }
        });
        return await modal.present();

    }


    /**
     * Méthode d'ajout de task
     * Si newTask.title n'est pas vide alors on renseigne les champs de newTask
     * et on crée task en BDD
     */
    onAddClick() {
        if (this.todo.title != null && this.todo.title !== '') {
            // Initialisation de la nouvelle tâche (avec id = null)
            this.todo = new Task({
                title: this.todo.title,
                priorize: false,
                done: false,
                creationDate: new Date(),
                dueDate: null
            });
            this.listService
                .addTask(this.list, this.todo)
                .subscribe(task => {
                    this.list.tasks.push(task);
                    this.todo = new Task();
                });
        }
    }

    /**
     * Méthode de mise à jour du champ 'priorize'
     * Inverse la valeur du champs 'priorize' et update task en BD
     * @param task
     */
    togglePriorize(task: Task) {
        task.priorize = !task.priorize;
        this.taskService
            .update(task)
            .subscribe((jsonObject =>
                this.list.tasks[this.list.tasks.findIndex(t => t.id === task.id)] = new Task(jsonObject)));
    }

    /**
     * Méthode de mise à jour du champ 'done'
     * Inverse la valeur du champs 'done' et update task en BD
     * @param task
     */
    toggleDone(task: Task) {
        task.done === true ? task.done = false : task.done = true;
        this.taskService
            .update(task)
            .subscribe((jsonObject =>
                this.list.tasks[this.list.tasks.findIndex(t => t.id === task.id)] = new Task(jsonObject)));
    }

    /**
     * Méthode de suppression de task dans list
     * @param task
     */
    onDeleteClick(task: Task) {
        this.taskService
            .delete(task.id)
            .subscribe(() =>
                this.popTask(task)
            );
    }

    /**
     * Supprime de la liste la tâche passée en paramètre
     * @param task la tâche à supprimer
     */
    private popTask(task: Task) {
        for (let i = 0; i < this.list.tasks.length; i++) {
            if (this.list.tasks[i].id === task.id) {
                this.list.tasks.splice(i, 1);
                break;
            }
        }
    }
}
