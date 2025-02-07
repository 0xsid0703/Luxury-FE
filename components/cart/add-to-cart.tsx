'use client';

import clsx from 'clsx';
import { useProduct } from '@/components/product/product-context';
import { ProductVariant } from '@/lib/shopify/types';
import { useCart } from './cart-context';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { toast } from '@/hooks/use-toast';
import { UserSubscriptionPlan } from '@/types';
import PurchaseButton from '../ui/PurchaseButton';

function SubmitButton({
  availableForSale,
}: {
  availableForSale: boolean;
}) {
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';
  const disabledClasses = 'cursor-not-allowed opacity-60 hover:opacity-60';

  if (!availableForSale) {
    return (
      <button disabled className={clsx(buttonClasses, disabledClasses)}>
        Out Of Stock
      </button>
    );
  }

  return (
    <PurchaseButton text='Buy Now' className='bg-[#A88573] text-lg text-white hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 w-fit px-6 h-fit py-2' />
  );
}

export function AddToCart({ product, collection, subscriptionPlan }: { product: any, collection: string, subscriptionPlan: UserSubscriptionPlan | undefined }) {
  const cart = useCart();
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useFormState(addItem, null);
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every((option) => option.value === state[option.name.toLowerCase()])
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find((variant: any) => variant.id === selectedVariantId)!;
  const checkAvailableOther = async () => {
    if (cart.cart?.lines.length && subscriptionPlan?.title == "Free") {
      if (cart.cart?.lines[0].merchandise.product.collections?.edges[0].node.handle != collection) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return (
    <form
      action={async () => {
        const available = await checkAvailableOther();
        if (available) {
          toast({ description: "You can only add one item of this product to the cart" })
          return;
        } else {
          addCartItem(finalVariant, product);
          await actionWithVariant();
        }
      }}
    >
      <SubmitButton availableForSale={availableForSale} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}