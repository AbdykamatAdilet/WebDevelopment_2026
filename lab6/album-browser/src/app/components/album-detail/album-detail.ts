import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrls: ['./album-detail.css']
})
export class AlbumDetail implements OnInit {
  album: Album | null = null;
  editTitle = '';
  loading = true;
  message = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data: Album) => {
        this.album = data;
        this.editTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  onSave(): void {
    if (!this.album) { return; }
    const updated: Album = { ...this.album, title: this.editTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        if (this.album) {
          this.album = { ...this.album, title: this.editTitle };
        }
        this.message = 'Title updated successfully!';
        setTimeout(() => { this.message = ''; }, 3000);
      },
      error: () => {
        this.message = 'Error updating album.';
      }
    });
  }
}
