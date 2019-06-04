import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()

export class HttpService {
  constructor(private http: HttpClient) {
  }

  getSpecificData(href: string) {
    return this.http.get(href);
  }

  getThirdGallery() {
    return this.http.get('https://images-api.nasa.gov/asset/as11-40-5874');
  }

  getSecondGallery() {
    return this.http.get('https://images-api.nasa.gov/asset/as11-40-5874');
  }

  getFirstGallery() {
    return this.http.get('https://images-api.nasa.gov/asset/as11-40-5874');
  }
}
