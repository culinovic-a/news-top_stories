import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NewsService } from '../services/news.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  Post: any = [];
  private subscription: Subscription;

  constructor(private restApi: NewsService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    return (this.subscription = this.restApi
      .getPosts()
      .subscribe(data => (this.Post = data['articles'])));
  }

  getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
