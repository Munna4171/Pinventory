import Image from "next/image";
import Link from "next/link";
import { getAllProducts, getAllCategories } from "@/lib/data";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categoriesData = getAllCategories();
  const categories = categoriesData.map((cat: any) => ({ slug: cat.slug }));
  return [...categories, { slug: "men" }, { slug: "women" }];
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoriesData = getAllCategories();
  const productsData = getAllProducts();
  
  // Find category metadata if it's a specific category, else use generic for "men"
  const categoryMeta = categoriesData.find((c: any) => c.slug === slug);
  const title = categoryMeta ? categoryMeta.name : (slug === "men" ? "Men" : slug);
  const description = categoryMeta ? categoryMeta.description : "All curated essentials for this section.";

  // Filter products by either sex (if 'men') or category
  const filteredProducts = productsData.filter(
    (product: any) => product.category === slug || product.sex === slug
  );

  if (filteredProducts.length === 0 && !categoryMeta && slug !== "men") {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* CATEGORY HEADER */}
      <section className="px-6 py-16 md:px-12 md:py-24 border-b border-ebony bg-ebony text-site-bg">
        <div className="max-w-3xl">
          <div className="font-mono text-xs tracking-widest uppercase mb-6 opacity-70">
            Category &bull; 01
          </div>
          <h1 className="font-brand text-5xl md:text-7xl font-[800] tracking-tight uppercase mb-6">
            {title}.
          </h1>
          <p className="font-ui text-lg opacity-80 leading-relaxed">
            {description}
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product: any, idx: number) => (
            <Link 
              key={product.id} 
              href={`/product/${product.id}`}
              className="group flex flex-col focus-visible:outline-none"
            >
              <div className="relative aspect-[4/5] w-full mb-6 overflow-hidden border border-ebony">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-4 left-4 bg-site-bg border border-ebony px-2 py-1 font-mono text-xs z-10 text-ebony">
                  0{idx + 1}
                </div>
              </div>
              
              <div className="flex flex-col gap-2 group-hover:text-amber transition-colors">
                <div className="flex justify-between items-start font-ui text-sm uppercase tracking-wide font-medium">
                  <h3 className="truncate pr-4">{product.name}</h3>
                  <span className="font-mono">{product.price}</span>
                </div>
                <div className="font-mono text-xs text-ebony/60 uppercase">
                  {product.category}
                </div>
              </div>
            </Link>
          ))}
          
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-12 text-center font-ui text-ebony/60">
              No products found in this category.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
