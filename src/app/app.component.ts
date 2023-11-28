import { Component, OnInit } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pim';
  isLoad: boolean = false;

  constructor(private loadingService: LoadingService) {}
  
  ngOnInit(): void {
    this.loadingService.listenLoading().subscribe({
      next: (response) => {
        this.isLoad = response;
      }
    })
  }

}
