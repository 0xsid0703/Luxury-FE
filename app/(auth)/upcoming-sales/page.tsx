import React from 'react'
import UpcomingSale from '@/components/upcoming-sales/UpcomingSale';
import { getCollectionProducts, getCollections } from '@/lib/shopify';
import { getCurrentUser } from '@/lib/auth';
export default async function UpcomingSalesPage() {
    const user = await getCurrentUser();
    const collections = await getCollections();
    const products = [];
    for (const collection of collections) {
        const prods = await getCollectionProducts({ collection: collection.handle });
        products.push(...prods);
    }

    return (
        <div className="min-h-screen">
            <div className="w-full bg-white">
                <UpcomingSale collections={collections} userId={user?.id} />
            </div>
        </div>
    )
}
