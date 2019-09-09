import {Component, OnInit} from '@angular/core';
import {TaskList} from '../model/task-list';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../model/task';
import {TaskListService} from '../services/TaskListService';
import {TaskService} from '../services/TaskService';

@Component({
    selector: 'app-tasks-page',
    templateUrl: './tasks-page.page.html',
    styleUrls: ['./tasks-page.page.scss'],
})
export class TasksPagePage implements OnInit {

    list = new TaskList();
    todo = new Task();

    constructor(
        private route: ActivatedRoute,
        private listService: TaskListService,
        private taskService: TaskService
    ) {
    }

    ngOnInit() {
        // Chargement de list
        this.listService
            .getById(1)
            .subscribe(list => this.list = list);
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
                dueDate: null});
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
        task.done = !task.done;
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
        console.log(task.id);
        this.taskService.delete(task.id);
    }


}
