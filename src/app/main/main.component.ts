import { Component, OnInit } from "@angular/core";
import { GetnewsService } from "./getnews.service";
import { Subscription } from "rxjs";
import { OnDestroy } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit, OnDestroy {
  Post: any = [];
  private subscription: Subscription;

  constructor(
    private restApi: GetnewsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    return (this.subscription = this.restApi
      .getPosts()
      .subscribe(data => (this.Post = data["articles"])));
  }

  getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
