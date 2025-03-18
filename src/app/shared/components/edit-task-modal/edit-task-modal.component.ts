import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';

@Component({
  standalone: false,
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.scss'],
})
export class EditTaskModalComponent {
  @Input() task!: Task;

  constructor(private modalCtrl: ModalController) {}

  close() {
    this.modalCtrl.dismiss(null);
  }

  saveChanges() {
    if (!this.task.title.trim() || !this.task.description.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    this.modalCtrl.dismiss(this.task);
  }
}
