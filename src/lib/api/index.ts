import {Cart} from "@/src/lib/types"
export async function getCart(cartId: string | undefined): Promise<Cart | undefined> {
    if (!cartId) {
      return undefined;
    }
}