import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data: Album[]) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onDelete(album: Album): void {
    this.albumService.deleteAlbum(album.id).subscribe({
      next: () => {
        this.albums = this.albums.filter((a: Album) => a.id !== album.id);
      },
      error: (err: unknown) => {
        console.error('Delete error', err);
      }
    });
  }
}
