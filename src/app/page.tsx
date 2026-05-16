import Image from "next/image";
import Link from "next/link";
import { getAllProducts, getAllCategories } from "@/lib/data";

export default async function Home() {
  const productsData = getAllProducts();
  const categoriesData = getAllCategories();
  const featuredProducts = productsData.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="px-6 py-12 md:px-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="flex flex-col items-start max-w-xl">
          <div className="font-mono text-xs tracking-widest uppercase mb-8 text-ebony/70">
            VOL. 01 &bull; SPRING CORE
          </div>
          <h1 className="font-brand text-5xl md:text-7xl font-[800] tracking-tight leading-[1.05] uppercase mb-8">
            The Quieter <br /> Statement.
          </h1>
          <p className="font-ui text-lg text-ebony/80 leading-relaxed mb-12">
            A curated selection of minimalist menswear essentials. Designed for longevity, sourced for quality, and compiled for the modern aesthetic.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link 
              href="/category/men" 
              className="bg-ebony text-bone px-8 py-4 font-ui text-sm uppercase tracking-wider hover:bg-amber transition-colors focus-visible:outline-none"
            >
              Browse the Edit &rarr;
            </Link>
            <Link 
              href="#sections" 
              className="font-ui text-sm uppercase tracking-wider text-ebony hover:text-amber transition-colors underline-offset-4 hover:underline"
            >
              Discover More
            </Link>
          </div>
        </div>
        
        <div className="relative aspect-square md:aspect-[4/5] w-full border border-ebony overflow-hidden group">
          <Image 
            src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?q=80&w=1200&auto=format&fit=crop" 
            alt="Editorial Cover" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute top-6 right-6 bg-site-bg border border-ebony px-3 py-1 font-mono text-xs tracking-widest uppercase z-10">
            COVER &bull; LOOK 01
          </div>
        </div>
      </section>

      {/* CHAPTER GRID SECTION */}
      <section id="sections" className="px-6 py-24 md:px-12 border-t border-ebony bg-ebony text-site-bg">
        <div className="mb-16 md:mb-24">
          <div className="font-mono text-xs tracking-widest uppercase mb-4 opacity-70">
            The Sections
          </div>
          <h2 className="font-brand text-4xl md:text-5xl font-[800] tracking-tight uppercase">
            Curated Categories.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {categoriesData.map((category: any, idx: number) => (
            <Link 
              key={category.slug} 
              href={`/category/${category.slug}`}
              className="group border border-site-bg/20 p-8 hover:border-amber hover:bg-site-bg/5 transition-all focus-visible:outline-none focus-visible:border-amber"
            >
              <div className="font-mono text-sm mb-12 opacity-60 group-hover:text-amber transition-colors">
                0{idx + 1}
              </div>
              <h3 className="font-brand text-2xl font-[800] tracking-tight uppercase mb-4">
                {category.name}
              </h3>
              <p className="font-ui text-sm opacity-80 mb-12 leading-relaxed">
                {category.description}
              </p>
              <div className="font-mono text-xs uppercase tracking-widest group-hover:text-amber transition-colors flex items-center gap-2">
                Enter <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCT GRID */}
      <section className="px-6 py-24 md:px-12">
        <div className="mb-16">
          <div className="font-mono text-xs tracking-widest uppercase mb-4 text-ebony/70">
            This Week
          </div>
          <h2 className="font-brand text-4xl md:text-5xl font-[800] tracking-tight uppercase">
            Currently on the Edit.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featuredProducts.map((product: any, idx: number) => (
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
                <div className="absolute top-4 left-4 bg-site-bg border border-ebony px-2 py-1 font-mono text-xs z-10">
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
        </div>
      </section>
    </div>
  );
}
