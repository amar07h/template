'use server';

import { TAGS } from '@/src/lib/constants';
//import { addToCart, createCart, getCart, removeFromCart, updateCart } from 'lib/shopify';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function addItem(prevState: any, selectedVariantId: string | undefined) {
 
}

export async function removeItem(prevState: any, merchandiseId: string) {
  
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  
}

export async function redirectToCheckout() {

}

export async function createCartAndSetCookie() {
}
