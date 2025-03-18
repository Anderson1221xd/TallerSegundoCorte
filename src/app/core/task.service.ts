import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private collectionName = 'tasks';

  constructor(private firestore: Firestore) {}

  getTasks(): Observable<Task[]> {
    const tasksCollection = collection(this.firestore, this.collectionName);
    return collectionData(tasksCollection, { idField: 'id' }).pipe(
      map((tasks) =>
        tasks.map((task) => ({
          ...task,
          date: (task as any).date?.toDate() ?? null,
        }))
      )
    ) as Observable<Task[]>;
  }

  async addTask(task: Task) {
    const tasksCollection = collection(this.firestore, this.collectionName);
    return await addDoc(tasksCollection, task);
  }

  async updateTask(task: Task) {
    const taskDoc = doc(this.firestore, `${this.collectionName}/${task.id}`);
    return await updateDoc(taskDoc, { ...task });
  }

  async deleteTask(id: string) {
    const taskDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return await deleteDoc(taskDoc);
  }
}
