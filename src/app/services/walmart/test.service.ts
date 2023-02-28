import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private api_service="http://localhost:8080/api/searchArray/"
  constructor(private httpClient: HttpClient) { }

  public saverProducts(arrary1: string[],arrary2: string[]):Observable<any>{

    const objeto = {
      arrary1,
      arrary2
    };
    return this.httpClient.post(this.api_service,objeto)
  }
}
