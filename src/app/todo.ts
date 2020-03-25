import { Type } from "@angular/core";

export interface Todo {
  id: number;
  value: string;
  status: boolean;
  parentList: number;
}
