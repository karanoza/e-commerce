import { Injectable } from "@angular/core";
import { AES, enc } from "crypto-js";
@Injectable({
  providedIn: "root",
})
export class EncDecService {
  constructor() {}

  encrypt(value: string, key: string): string {
    return AES.encrypt(value, key).toString();
  }

  decrypt(value: string, key: string): string {
    const bytes = AES.decrypt(value, key);
    return bytes.toString(enc.Utf8);
  }
}
