import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TaskService } from '../core/task.service';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { EditTaskModalComponent } from '../shared/components/edit-task-modal/edit-task-modal.component';
@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tasks$: Observable<Task[]>;
  selectedTask: Task | null = null;
  @ViewChild('editTaskModal', { static: false }) editTaskModal!: ElementRef;
  constructor(
    private taskService: TaskService,
    private modalCtrl: ModalController
  ) {
    this.tasks$ = this.taskService.getTasks();
  }

  ngOnInit() {}
  async openEditModal(task: Task) {
    const modal = await this.modalCtrl.create({
      component: EditTaskModalComponent,
      componentProps: { task: { ...task } },
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.taskService.updateTask(data);
    }
  }

  addTask() {
    const newTask: Task = {
      title: 'Nueva tarea',
      description: 'Descripción de la tarea',
      date: new Date(),
      done: false,
    };
    this.taskService.addTask(newTask);
  }

  toggleTask(task: Task) {
    task.done = !task.done;
    this.taskService.updateTask(task);
  }

  deleteTask(id?: string) {
    if (id) {
      this.taskService.deleteTask(id);
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
    this.selectedTask = null;
  }

  updateTask() {
    if (!this.selectedTask) return;

    if (
      !this.selectedTask.title.trim() ||
      !this.selectedTask.description.trim()
    ) {
      alert('Por favor, llena todos los campos.');
      return;
    }

    this.taskService.updateTask(this.selectedTask).then(() => {
      this.closeModal();
    });
  }
}
