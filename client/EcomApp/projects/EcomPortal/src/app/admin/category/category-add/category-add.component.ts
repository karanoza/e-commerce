import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import {
  FormArray,
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
  // Control to add category
  addControl() {
    const categoryControl = this.categoryForm.controls.category as FormArray; // Typecasting as formaarray
    categoryControl.push(this.buildForm());
  }
  // Control to remove category
  removeControl(i: number) {
    const categoryControl = this.categoryForm.controls.category as FormArray;
    categoryControl.removeAt(i);
  }

  // Control to Save category
  saveCategories() {
    this.addcategory.emit(this.categoryForm.controls.category.value);
  }
}
