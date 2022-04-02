import { Product } from "@prisma/client";

export interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

export interface CommonResponseMutation {
  ok: boolean;
}
