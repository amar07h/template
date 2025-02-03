import { GridTileImage } from '@/src/components/grid/tile';
import type { Product } from '@/src/lib/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product|any;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.slug}`}
        prefetch={true}
      >
        <GridTileImage
          src={"/assets/baby-cap-black.png"}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={"item.title"}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: "easy",
            amount: "125",
            currencyCode: "tnd"
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {
  // Collections that start with `hidden-*` are hidden from the search page.
  //todo make this with real data 
  const homepageItems =  [
      {
        id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjA=",
        name: "New Short Sleeve T-Shirt",
        vendor: "Next.js",
        path: "/new-short-sleeve-t-shirt",
        slug: "new-short-sleeve-t-shirt",
        price: { value: "25" , currencyCode: "USD" },
        description: "Show off your love for Next.js and Vercel with this unique, limited edition t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last - only 200 of these shirts will be made! All proceeds will be donated to charity.",
       descriptionHtml: "<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last - only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>",
        images: [
          {
            url: "/assets/baby-cap-black.png",
            altText: "Shirt",
            width: 1000,
            height: 1000
          },
          {
            url: "/assets/baby-cap-black.png",
            altText: "Shirt",
            width: 1000,
            height: 1000
          },
          {
            url: "/assets/baby-cap-black.png",
            altText: "Shirt",
            width: 1000,
            height: 1000
          }
        ],
        variants: [
          {
            id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjAss=",
            name: "New Short Sleeve T-Shirt",
            sku: "new-short-sleeve-t-shirt",
           options: [
              {
                "__typename": "MultipleChoiceOption",
                id: "asd",
                displayName: "Size",
                values: [
                  {
                   label: "XL"
                  }
                ]
              }
            ]
          }
        ],
       options: [
          {
            id: "option-color",
            displayName: "Color",
            values: [
              {
               label: "color",
                hexColors: ["#222"]
              }
            ]
          },
          {
            id: "option-size",
            displayName: "Size",
            values: [
              {
               label: "S"
              },
              {
               label: "M"
              },
              {
               label: "L"
              }
            ]
          }
        ]
      },
      {
        id: "Z2lkOi8vc2hvcGlmeS9Qcm9ksdWN0LzU0NDczMjUwMjQ0MjA=",
        name: "Lightweight Jacket",
        vendor: "Next.js",
        path: "/lightweight-jacket",
        slug: "lightweight-jacket",
        price: { value: "249.99", currencyCode: "USD" },
        description: "Show off your love for Next.js and Vercel with this unique, limited edition t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last - only 200 of these shirts will be made! All proceeds will be donated to charity.",
       descriptionHtml: "<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>",
        images: [
          {
            "url": "/assets/lightweight-jacket-0.png",
            altText: "Lightweight Jacket",
            width: 1000,
            height: 1000
          },
          {
            "url": "/assets/lightweight-jacket-1.png",
            altText: "Lightweight Jacket",
            width: 1000,
            height: 1000
          },
          {
            "url": "/assets/lightweight-jacket-2.png",
            altText: "Lightweight Jacket",
            width: 1000,
            height: 1000
          }
        ],
        variants: [
          {
            id: "Z2lkOid8vc2hvcGlmeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjAss=",
            name: "Lightweight Jacket",
            sku: "lightweight-jacket",
           options: [
              {
                "__typename": "MultipleChoiceOption",
                id: "asd",
                displayName: "Size",
                values: [
                  {
                   label: "XL"
                  }
                ]
              }
            ]
          }
        ],
       options: [
          {
            id: "option-color",
            displayName: "Color",
            values: [
              {
               label: "color",
                hexColors: ["#222"]
              }
            ]
          },
          {
            id: "option-size",
            displayName: "Size",
            values: [
              {
               label: "S"
              },
              {
               label: "M"
              },
              {
               label: "L"
              }
            ]
          }
        ]
      },
      {
        id: "Z2lkOis8vc2hvcGlmsddeS9Qcm9kdWN0LzU0NDczMjUwMjQ0MjA=",
        name: "Shirt",
        vendor: "Next.js",
        path: "/shirt",
        slug: "shirt",
        price: { value: "25", currencyCode: "USD" },
        description: "Show off your love for Next.js and Vercel with this unique, limited edition t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last - only 200 of these shirts will be made! All proceeds will be donated to charity.",
       descriptionHtml: "<p><span>Show off your love for Next.js and Vercel with this unique,&nbsp;</span><strong>limited edition</strong><span>&nbsp;t-shirt. This design is part of a limited run, numbered drop at the June 2021 Next.js Conf. It features a unique, handcrafted triangle design. Get it while supplies last – only 200 of these shirts will be made!&nbsp;</span><strong>All proceeds will be donated to charity.</strong></p>",
        images: [
          {
            url: "/assets/t-shirt-0.png",
            altText: "Shirt",
            width: 1000,
            height: 1000
          },
          {
            url: "/assets/t-shirt-1.png",
            altText: "Shirt",
            width: 1000,
            height: 1000
          },
          {
            url: "/assets/t-shirt-2.png",
            altText: "Shirt",
            width: 1000,
            height: 1000
          },
          {
            url: "/assets/t-shirt-3.png",
            altText: "Shirt",
            width: 1000,
            height: 1000
          },
          {
            url: "/assets/t-shirt-4.png",
            altText: "Shirt",
            width: 1000,
            height: 1000
          }
        ],
        variants: [
          {
            id: "Z2lkOi8vc2hvcGlmeS9Qcms9kdWN0LzU0NDczMjUwMjQ0MjAss=",
            name: "Shirt",
            sku: "shirt",
           options: [
              {
                "__typename": "MultipleChoiceOption",
                id: "asd",
                displayName: "Size",
                values: [
                  {
                   label: "XL"
                  }
                ]
              }
            ]
          }
        ],
       options: [
          {
            id: "option-color",
            displayName: "Color",
            values: [
              {
               label: "color",
                hexColors: ["#222"]
              }
            ]
          },
          {
            id: "option-size",
            displayName: "Size",
            values: [
              {
               label: "S"
              },
              {
               label: "M"
              },
              {
               label: "L"
              }
            ]
          }
        ]
      }
    ]
  

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
