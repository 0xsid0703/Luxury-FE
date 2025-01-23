'use client';

import clsx from 'clsx';
import { useProduct } from '@/components/product/product-context';
import { ProductVariant } from '@/lib/shopify/types';
import { useCart } from './cart-context';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { Button } from '../ui/button';

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
    <Button
      aria-label="Buy Now"
      className="flex flex-row py-7 px-9 w-fit text-white bg-[#E3713D] rounded-full text-lg outline outline-4 outline-[#D49F5E]/20 hover:shadow-[0_0_0_0px_black,0_8px_0_0_black] hover:-translate-y-2 transition-all hover:bg-[#E3713D]"
    >
      Buy now
    </Button>
  );
}

export function AddToCart({ product }: { product: any }) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const { state } = useProduct();
  const [message, formAction] = useFormState(addItem, null);
  console.log({ useFormState });
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every((option) => option.value === state[option.name.toLowerCase()])
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find((variant: any) => variant.id === selectedVariantId)!;

  return (
    <form
      action={async () => {
        addCartItem(finalVariant, product);
        await actionWithVariant();
      }}
    >
      <SubmitButton availableForSale={availableForSale} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}