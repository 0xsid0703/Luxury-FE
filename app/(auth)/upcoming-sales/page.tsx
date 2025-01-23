import React from 'react'
import UpcomingSale from '@/components/upcoming-sales/UpcomingSale';
import { getCollectionProducts, getCollections } from '@/lib/shopify';
export default async function UpcomingSalesPage() {
    const collections = await getCollections();
    const products = [];
    for (const collection of collections) {
        const prods = await getCollectionProducts({ collection: collection.handle });
        products.push(...prods);
    }

    return (
        <div className="min-h-screen">
            <div className="w-full bg-white">
                <UpcomingSale collections={collections} products={products} />
            </div>
        </div>
    )
}
