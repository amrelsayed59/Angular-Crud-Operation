import { Component, OnInit } from "@angular/core";
import { PostsService } from "src/app/core/services/posts.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
})
export class PostListComponent implements OnInit {
  posts: any = [];
  constructor(
    private _PostsService: PostsService,
    private _Toaster: ToastrService,
    private _ModelService: NgbModal
  ) {}

  open(content) {
    this._ModelService.open(content);
  }

  getAll() {
    this._PostsService.getAll().subscribe((res) => {
      this.posts = res;
      console.log(this.posts);
    });
  }

  //Delete Item
  deletePost(model, id) {
    this._ModelService.open(model).result.then(
      (result) => {
        this._PostsService.deletePost(id).subscribe(
          (res) => {
            this._Toaster.success("Item deleted Successfuly", "Success", {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
            });
            this.getAll();
          },
          (err) => {
            this._Toaster.error(err.statusText, "Error", {
              timeOut: 3000,
              closeButton: true,
              progressBar: true,
            });
            console.log(err);
          }
        );
      },

      (reason) => {
        console.log(reason);
      }
    );
  }

  ngOnInit(): void {
    this.getAll();
  }
}
