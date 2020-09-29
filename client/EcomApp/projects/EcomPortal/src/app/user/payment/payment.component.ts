import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CartService } from "../cart/cart.service";
import { UserOrderService } from "../order/service/user-order.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {
  products = [];
  total: number;
  shippingAddress: FormGroup;
  displayedColumns: string[] = [
    "imageUrl",
    "productName",
    "quantity",
    "price",
    "total",
  ];
  //public payPalConfig?: IPayPalConfig;
  constructor(
    private cartService: CartService,
    private orderService: UserOrderService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.shippingAddress = this.fb.group({
      addressLine1: ["", Validators.required],
      addressLine2: ["", Validators.required],
      city: ["", Validators.required],
      pin: ["", Validators.required],
    });
    this.cartService.getProductForCheckOut().subscribe((productList) => {
      this.products = productList;
      this.total = productList
        .map((p) => p.quantity * p.price)
        .reduce((total: any, price: any) => total + price, 0);
    });
    //this.initConfig();
  }

  // private initConfig(): void {
  //   this.payPalConfig = new IPayPalConfig(
  //     PayPalIntegrationType.ClientSideREST,
  //     PayPalEnvironment.Sandbox,
  //     {
  //       commit: true,
  //       client: {
  //         sandbox:
  //           "AbEgj2DaYCQld_fXyf0-HpTIsQuR4O1rhAARXjrp8NQDG6IHzRCfYsDnuCRO1p3PXYsqzBxLBXpbbZ6v",
  //       },
  //       button: {
  //         label: "paypal",
  //       },
  //       onPaymentComplete: (paymentInfo, actions) => {
  //         console.log("OnPaymentComplete");
  //         console.log(paymentInfo);
  //         console.log(actions);
  //         this.placeOrder(paymentInfo);
  //       },
  //       onCancel: (data, actions) => {
  //         console.log("OnCancel");
  //       },
  //       onError: (err) => {
  //         console.log("OnError");
  //         console.log(err);
  //       },
  //       transactions: [
  //         {
  //           amount: {
  //             currency: "USD",
  //             total: this.total,
  //           },
  //         },
  //       ],
  //     }
  //   );
  // }

  placeOrder(paymentData: any) {
    const order = {
      products: this.products,
      shippingAddress: this.shippingAddress.getRawValue(),
      paymentInfo: paymentData,
      total: this.total,
    };
    this.orderService.placeOrder(order).subscribe((result) => {
      this.router.navigate(["/user/order", result.data]);
    });
  }
}
