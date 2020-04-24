import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  Post: any = [];
  private subscription: Subscription;

  constructor(
    private restApi: NewsService,
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    return (this.subscription = this.restApi
      .getPosts()
      .subscribe((data) => (this.Post = data['articles'])));
  }

  getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // logOut() {
  // this.authService.logout();
  // this.router.navigateByUrl('/auth');
  // }
}
