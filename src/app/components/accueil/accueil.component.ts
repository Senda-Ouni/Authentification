import { HttpErrorResponse } from '@angular/common/http';
import { AlbumService } from './../../shared/services/album.service';
import { AlbumModel, PaginationConfig } from '../../shared/models/items.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

 public albumListe: AlbumModel[];
 public errorApi: string;
 p: number = 1;
 public tableConfig = new PaginationConfig();
  constructor(private albumService: AlbumService) {
    this.albumListe = [];
  }

  ngOnInit() {
    this.getAllAlbum();
  }
  public getAllAlbum() {
    console.log('1')
    this.albumListe = [];
    this.albumService.getAll().then(res => {
      this.albumListe = res;
      console.log(res);
    },
    (err: HttpErrorResponse) => {
      this.errorApi = err.message;
      console.log('3')
    })
  }
}
