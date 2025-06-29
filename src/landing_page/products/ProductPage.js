import TitleSetter from '../TitleSetter'
import Hero from "./Hero";
import { LeftImage, LeftImage2, LeftImage3 } from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

const ProductPage = () => {
  return (
    <>
      <TitleSetter title={"Zerodha's product: Our technology, trading and ..."}/>
      <Hero/>
      <LeftImage
        ImageUrl = "media/images/products-kite.png"
        heading = "Kite"
        paragraph="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try demo"
        learnMore="Learn more"
        googlePlayStore="media/images/googlePlayBadge.svg"
        IOS="media/images/appstore-badge.svg"
      />

      <RightImage
        ImageURL={'media/images/products-console.png'}
        title={'Console'}
        paragraph={'The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.'}
        link={'Learn more'}
      />

      <LeftImage2
        ImageUrl = "media/images/products-coin.png"
        heading = "Coin"
        paragraph="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        googlePlayStore="media/images/googlePlayBadge.svg"
        IOS="media/images/appstore-badge.svg"
      />

      <RightImage
        ImageURL={'media/images/landing.svg'}
        title={'Kite Connect API'}
        paragraph={'Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'}
        link={'Kite Connect'}
      />

      <LeftImage3
        ImageUrl = "media/images/varsity-products.png"
        heading = "Varsity mobile"
        paragraph="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlayStore="media/images/googlePlayBadge.svg"
        IOS="media/images/appstore-badge.svg"
      />

    <Universe/>
    </>
  );
}

export default ProductPage