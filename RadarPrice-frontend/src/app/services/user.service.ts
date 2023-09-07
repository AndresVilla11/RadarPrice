import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  //Crear
  createUser(user: User) {
    return this.http.post<User>('', user, {
      observe: 'response'
    })
  }

  //Obtener
  getUser() {
    return this.http.get<User[]>('');
  }

  //Actualizar
  updateUser(user: User) {
    return this.http.put<User>('', user, {
      observe: 'response'
    })
  }

  //Eliminar
  deleteUser(id: number) {
    return this.http.delete<Boolean>('', {
      observe: 'response'
    })
  }

}
