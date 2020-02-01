import { Component, OnInit } from "@angular/core";
import { GetnewsService } from "./getnews.service";
import { Subscription } from "rxjs";
import { OnDestroy } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit, OnDestroy {
  Post: any = [];
  private subscription: Subscription;

  constructor(private restApi: GetnewsService) {}

  ngOnInit() {
    this.loadPosts();
  }

  // Get posts list
  loadPosts() {
    return (this.subscription = this.restApi
      .getPosts()
      .subscribe(data => (this.Post = data["articles"])));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
