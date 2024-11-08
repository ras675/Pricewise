import Image from 'next/image';
import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel';


const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text flex items-center gap-2">
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow pointing right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

           < Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section px-6 md:px-20 py-12">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {['Iphone 15', 'Book', 'Shoes'].map((product, index) => (
            <div key={index} className="product-item">
              {product}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
