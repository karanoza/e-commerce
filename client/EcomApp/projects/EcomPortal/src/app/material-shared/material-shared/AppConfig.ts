import { IAppConfig } from "./IAppConfig";
import { InjectionToken } from "@angular/core";

export const APP_CONFIG = new InjectionToken<IAppConfig>("config");
