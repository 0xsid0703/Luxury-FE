import clsx from 'clsx';
import Image from 'next/image';
export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors bg-[#E3713D]">
      <Image
        width={30}
        height={30}
        src={'/shopping-cart.svg'}
        alt=''
        className={clsx('h-6 transition-all ease-in-out hover:scale-110', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -translate-y-1/2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
