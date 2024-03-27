import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private readonly DB_URL = "http://localhost:3000/groups";

  constructor(private readonly myClient:HttpClient) { }

  getAllGroups(){
    return this.myClient.get(this.DB_URL);
  }

  getGroupByID(id:any){
    return this.myClient.get(this.DB_URL+"/"+id);
  }

  AddNewGroup(Group:any){
    return this.myClient.post(this.DB_URL,Group);
  }

  updateGroup(id:any,Group:any){
    return this.myClient.put(this.DB_URL+"/"+id,Group);
  }

  deleteGroup(id:any){
    return this.myClient.delete(this.DB_URL+"/"+id);
  }
  
}
