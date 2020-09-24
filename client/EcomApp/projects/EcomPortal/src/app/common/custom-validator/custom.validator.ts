import { FormGroup, ValidationErrors } from "@angular/forms";

export class CustomValidator {
  static validatePassword(form: FormGroup): ValidationErrors {
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    if (password.value === confirmPassword.value) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }
}
