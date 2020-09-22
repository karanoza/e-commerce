import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.css"],
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  @Input() categories: any;
  @Output() addProduct = new EventEmitter<any>();
  fileToUpload: File;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required),
      description: new FormControl("", [
        Validators.required,
        Validators.maxLength(500),
      ]),
      imageUrl: new FormControl("", Validators.required),
      price: new FormControl("", Validators.required),
      qty: new FormControl(""),
    });
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
  }

  submitProduct() {
    const productData = {
      imageUrl: this.fileToUpload,
      product: this.productForm.value,
    };
    this.addProduct.emit(productData);
  }
}
