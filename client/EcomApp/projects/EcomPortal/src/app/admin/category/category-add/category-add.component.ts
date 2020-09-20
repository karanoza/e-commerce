import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { CategoryService } from "../../../common/services/category.service";

@Component({
  selector: "app-category-add",
  templateUrl: "./category-add.component.html",
  styleUrls: ["./category-add.component.css"],
})
export class CategoryAddComponent implements OnInit {
  categoryForm: FormGroup;
  @Output() addcategory = new EventEmitter<any>();
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.categoryForm = this.fb.group({
      category: this.fb.array([this.buildForm()]),
    });
  }

  buildForm() {
    return this.fb.group({
      categoryName: new FormControl("", Validators.required),
    });
  }
}
