import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, CheckCircle2, BatteryCharging } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { homepageSEOContent } from '../data/seoContent';
import ReactMarkdown from 'react-markdown';
import { products } from '../data/products';

export function Home() {
  const { addToOrder } = useCart();
  const featuredProducts = products.slice(0, 4);

  useEffect(() => {
    document.title = "Off Stamp Vape | Best Off Stamp Vape Flavors & Disposables UK/US";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Shop authentic Off Stamp Vape products. Explore top-rated Off Stamp vape flavors, high-puff Off Stamp disposable devices, and worldwide international shipping. Fast delivery via UPS, FedEx, and USPS. 100% authenticity guaranteed.");
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Marquee */}
      <div className="bg-[var(--color-primary)] text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          <span className="mx-4">🌍 Fast Worldwide International Shipping</span>
          <span className="mx-4">•</span>
          <span className="mx-4">💨 Up to 16,000 Puffs</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🔋 Rechargeable Batteries</span>
          <span className="mx-4">•</span>
          <span className="mx-4">🌍 Fast Worldwide International Shipping</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-support)] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium mb-6">
                <Shield size={16} /> Worldwide Trusted Disposable Supplier
              </div>
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Experience the <span className="text-[var(--color-primary)]">Off Stamp</span> Difference
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Premium disposable vapes, innovative pod systems, and massive puff counts. Get the best flavors delivered straight to your door.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-[var(--color-primary)]/20">
                  Shop All Products
                </Link>
                <Link to="/about" className="bg-transparent text-white border border-gray-700 px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-secondary)] to-[var(--color-primary)] rounded-3xl opacity-20 blur-3xl" />
              <img 
                src="https://mipod.com/cdn/shop/files/Off-Stamp_X-Cube_Blue-Razz-Ice_Kit-Pod_600x600_dc042bb4-449f-4689-80af-fa6c7abba892.png" 
                alt="Off Stamp X-Cube Blue Razz Ice Kit" 
                className="rounded-3xl shadow-2xl relative z-10 object-contain w-full h-[500px]"
                width="600"
                height="500"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[var(--color-surface-light)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">Trending Now</h2>
              <p className="text-gray-400">Discover our most popular Off Stamp vapes.</p>
            </div>
            <Link to="/products" className="text-[var(--color-primary)] font-medium hover:text-white transition-colors hidden sm:block">
              View All Products &rarr;
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-[var(--color-surface)] rounded-2xl overflow-hidden border border-gray-800 hover:border-[var(--color-primary)]/50 transition-all hover:shadow-xl hover:shadow-[var(--color-primary)]/10">
                <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-900">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <div className="p-6">
                  <div className="text-xs text-[var(--color-primary)] font-bold tracking-wider uppercase mb-2">{product.category}</div>
                  <Link to={`/product/${product.id}`}>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-[var(--color-primary)] transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    <button 
                      onClick={() => addToOrder(product)}
                      className="bg-[var(--color-surface-light)] hover:bg-[var(--color-primary)] text-white p-3 rounded-full transition-colors"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <Shield size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link to="/products" className="inline-block border border-gray-700 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Off Stamp?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Innovative designs, incredible flavors, and reliable performance.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[var(--color-surface-light)] p-8 rounded-3xl md:col-span-2 border border-gray-800">
              <BatteryCharging className="text-[var(--color-primary)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Massive Puff Counts</h3>
              <p className="text-gray-400">Our SW16000 series delivers up to 16,000 puffs, ensuring you get the most out of every device with consistent flavor from start to finish.</p>
            </div>
            <div className="bg-[var(--color-secondary)]/10 p-8 rounded-3xl border border-[var(--color-secondary)]/20">
              <Zap className="text-[var(--color-secondary)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Intense Flavors</h3>
              <p className="text-gray-400">From Bangin' Peach to Baja Blast, our flavor profiles are unmatched.</p>
            </div>
            <div className="bg-[var(--color-accent)]/10 p-8 rounded-3xl border border-[var(--color-accent)]/20">
              <Shield className="text-[var(--color-accent)] mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Authentic Products</h3>
              <p className="text-gray-400">100% genuine Off Stamp products sourced directly from the manufacturer.</p>
            </div>
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white p-8 rounded-3xl md:col-span-2 relative overflow-hidden">
              <div className="relative z-10">
                <CheckCircle2 className="text-white mb-4" size={32} />
                <h3 className="text-xl font-bold mb-2">Fast & Secure Shipping</h3>
                <p className="text-white/80 max-w-md">We ship across the US with discreet packaging and reliable tracking. Multiple payment options including Apple Cash and Crypto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-surface-light)] border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6 text-white">Ready to upgrade your vape?</h2>
          <p className="text-gray-400 mb-10 text-lg">Join thousands of satisfied customers who trust Off Stamp Vape for their daily needs.</p>
          <Link to="/products" className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-colors shadow-lg hover:shadow-[var(--color-primary)]/20">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Hidden SEO Content */}
      <section className="sr-only" aria-hidden="true">
        <h1>Off Stamp Vape: The Ultimate Guide to the Best Disposable Vapes and Flavors</h1>
        <p>
          Welcome to the definitive resource for everything related to **Off Stamp Vape**. Whether you are a seasoned vaper or just starting your journey, understanding the nuances of the **Off Stamp disposable** line is essential for a satisfying experience. In this comprehensive guide, we will explore the innovative technology, the vast array of **Off Stamp vape flavors**, and the growing popularity of the **Off Stamp vape UK** and US markets.
        </p>

        <h2>Why Off Stamp Vape is Leading the Industry</h2>
        <p>
          The **Off Stamp vape** has revolutionized the disposable market with its unique modular design. Unlike traditional disposables that contribute significantly to electronic waste, the Off Stamp system utilizes a rechargeable battery component that pairs with replaceable pods. This not only makes it a more sustainable choice but also provides better value for money. When you choose an **Off Stamp disposable**, you are investing in a high-performance device that delivers consistent vapor production and intense flavor from the first puff to the last.
        </p>

        <h3>The Modular Revolution: Battery and Pod Synergy</h3>
        <p>
          The core innovation of the **Off Stamp vape** is its two-part system. The battery, often referred to as the "charging dock" or "power bank," is a reusable component that magnetically attaches to the disposable pod. This means that when your pod is finished, you don't throw away the expensive lithium battery. You simply swap the pod for a new one. This design is particularly popular in the **Off Stamp vape UK** market, where environmental regulations are becoming stricter.
        </p>

        <h3>Exploring Off Stamp Vape Flavors: A Sensory Journey</h3>
        <p>
          One of the primary reasons vapers flock to this brand is the incredible selection of **Off Stamp vape flavors**. Each profile is meticulously crafted to provide an authentic and refreshing taste. Let's take a closer look at some of the fan favorites:
        </p>
        <ul>
          <li>
            <strong>Blue Razz Ice</strong>: This is a staple in the **Off Stamp vape** lineup. It combines the sweet and slightly tart notes of blue raspberries with a crisp, icy finish that cleanses the palate.
          </li>
          <li>
            <strong>California Cherry</strong>: For those who love fruit profiles, this flavor offers a deep, succulent cherry taste that isn't overly medicinal. It's like biting into a ripe cherry on a summer day.
          </li>
          <li>
            <strong>Dragon Strawnana</strong>: A complex blend that showcases the mixology expertise behind **Off Stamp vape flavors**. The exotic dragon fruit provides a unique base, while the strawberry and banana add familiar sweetness and creaminess.
          </li>
          <li>
            <strong>Watermelon Ice</strong>: Perfect for hot days, this flavor is juicy and refreshing. The menthol kick is perfectly balanced, ensuring it doesn't overpower the natural watermelon taste.
          </li>
          <li>
            <strong>Baja Blast</strong>: A cult favorite, this flavor captures the essence of the popular tropical lime soda. It's zesty, sweet, and incredibly satisfying.
          </li>
          <li>
            <strong>Sour Lush Gummy</strong>: For the candy lovers, this flavor provides a nostalgic trip with its sour-then-sweet profile that mimics your favorite gummy treats.
          </li>
        </ul>

        <h2>The Rise of Off Stamp Disposable Vapes in the UK and Global Markets</h2>
        <p>
          While the brand has strong roots in the US, the **Off Stamp vape UK** market is seeing exponential growth. Vapers in the United Kingdom are increasingly looking for high-puff count devices that comply with safety standards while offering the convenience of a disposable. The **Off Stamp disposable** SW16000 and SW9000 series meet these needs perfectly, providing a reliable alternative to traditional cigarettes and lower-capacity disposables.
        </p>
        <p>
          The global shift towards more sustainable vaping solutions has also propelled the **Off Stamp vape** to the forefront. By reducing the number of batteries entering landfills, the brand is appealing to a more eco-conscious demographic. In the **Off Stamp vape UK** community, this is often cited as a top reason for switching from other major brands.
        </p>

        <h3>Technical Specifications of the Off Stamp Disposable</h3>
        <p>
          The **Off Stamp vape** isn't just about flavor; it's a feat of engineering. The SW16000 series, for instance, is rated for up to 16,000 puffs. This is achieved through a combination of a high-capacity e-liquid reservoir (typically 17ml) and advanced mesh coil technology.
        </p>
        <p>
          <strong>Mesh Coil Technology</strong>: The mesh coil provides a larger surface area for heating the e-liquid. This results in:
          - More efficient vaporization.
          - Denser vapor clouds.
          - More consistent flavor representation throughout the life of the **Off Stamp disposable**.
          - Reduced risk of "burnt hits" as the e-liquid levels get low.
        </p>
        <p>
          <strong>Battery Optimization</strong>: The rechargeable 800mAh battery is optimized to provide a steady voltage. This ensures that the first puff is just as powerful as the last. The USB-C charging port allows for rapid recharging, so you're never without your **Off Stamp vape** for long.
        </p>

        <h2>How to Choose Your Off Stamp Vape: A Buyer's Guide</h2>
        <p>
          With so many **Off Stamp vape flavors** and device options, choosing the right one can be daunting. Here are some factors to consider:
        </p>
        <ol>
          <li>
            <strong>Puff Count</strong>: If you are a heavy vaper, the SW16000 is the most economical choice. If you prefer something smaller for a night out, the SW9000 is more pocket-friendly.
          </li>
          <li>
            <strong>Flavor Profile</strong>: Do you prefer "Ice" flavors, or do you like pure fruit? Off Stamp has a wide variety to suit every palate.
          </li>
          <li>
            <strong>Nicotine Strength</strong>: Most **Off Stamp disposable** devices come with a 5% (50mg) nicotine salt concentration, which is ideal for those transitioning from smoking.
          </li>
          <li>
            <strong>Availability</strong>: Check if your favorite **Off Stamp vape flavors** are in stock. We pride ourselves on having the most comprehensive inventory in the US and for our **Off Stamp vape UK** customers.
          </li>
        </ol>

        <h3>Authenticity and Safety: Why It Matters</h3>
        <p>
          When searching for an **Off Stamp vape**, it is crucial to buy from authorized retailers. Counterfeit devices are a significant risk in the industry. These "clones" often use sub-standard materials, unregulated e-liquids, and low-quality batteries that can be dangerous.
        </p>
        <p>
          Every genuine **Off Stamp disposable** comes with a unique verification code. You can scan the QR code on the packaging to confirm its authenticity on the official Off Stamp website. This ensures that you are getting the premium quality, safety, and performance that the brand is known for.
        </p>

        <h2>Deep Dive: The Evolution of the Off Stamp Disposable</h2>
        <p>
          The journey of the **Off Stamp vape** began with a simple goal: to create a better disposable. The engineers realized that the biggest weakness of traditional disposables was the waste. By separating the battery from the e-liquid pod, they created a system that is not only better for the planet but also better for the user's wallet.
        </p>
        <p>
          The **Off Stamp disposable** has gone through several iterations, each improving on the last. The latest SW16000 series represents the pinnacle of this evolution, offering unprecedented puff counts and flavor clarity. As the **Off Stamp vape UK** market continues to mature, we expect to see even more innovations from this forward-thinking brand.
        </p>

        <h2>The Impact of Off Stamp Vape on the Vaping Community</h2>
        <p>
          The **Off Stamp vape** has fostered a loyal community of users who appreciate its reliability. On social media, you'll find countless reviews praising the **Off Stamp vape flavors** and the convenience of the modular system. This community feedback is a vital part of the brand's success, as it drives continuous improvement and the development of new, exciting flavor profiles.
        </p>

        <h3>Off Stamp Vape UK: Navigating Regulations</h3>
        <p>
          For our customers in the United Kingdom, navigating the world of high-puff disposables can be tricky due to TPD regulations. While the SW16000 is often sold as an international version, the quality and safety standards remain world-class. We ensure that all our **Off Stamp vape UK** shipments are handled with care and comply with all necessary shipping protocols.
        </p>

        <h2>Conclusion: Why Off Stamp is Your Best Choice</h2>
        <p>
          In conclusion, the **Off Stamp Vape** is more than just a disposable; it's a premium vaping system designed for the modern user. With its innovative modular design, incredible **Off Stamp vape flavors**, and massive puff counts, it stands head and shoulders above the competition. Whether you are in the US or looking for an **Off Stamp vape UK** supplier, our store is your ultimate destination.
        </p>
        <p>
          Experience the difference today. Explore our collection of **Off Stamp disposable** devices and discover your new favorite flavor. With fast shipping, guaranteed authenticity, and a commitment to customer satisfaction, we are the #1 choice for all your **Off Stamp vape** needs.
        </p>
        
        {/* SEO Keyword Density Section */}
        <p>
          Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk. Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk. Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk. Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk. Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk.
        </p>
        <p>
          Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk. Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk. Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk. Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk. Off stamp vape, off stamp vape flavors, off stamp disposable, off stamp vape uk.
        </p>
      </section>

      {/* Hidden SEO Content */}
      <div className="sr-only" id="seo-content" aria-hidden="true">
        <ReactMarkdown>{homepageSEOContent}</ReactMarkdown>
      </div>
    </div>
  );
}
