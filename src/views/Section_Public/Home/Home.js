// Usando el comando de abajo podemos tener los tres slides necesarios que nos hemos importado..
// npm install react-bootstrap bootstrap
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import { Navigate } from "react-router-dom";
// Import From utils.
import FirstSlide from "./Sliders/FirstSlide";
import SecondSlide from "./Sliders/SecondSlide";
import ThirdSlid from "./Sliders/ThirdSlid";


function Home({ authorized }) {
    const tokenAdmin = sessionStorage.getItem("admin");
  const tokenWroker = sessionStorage.getItem("worker");

  authorized = tokenAdmin || tokenWroker ;

  const carouselItems = [
    {
      imgSrc:
        "https://nypost.com/wp-content/uploads/sites/2/2022/06/OR-codes.jpg?quality=75&strip=all",
      altText: "First slide",
      captionContent: <FirstSlide />,
    },
    {
      imgSrc:
        "https://orderlina.com/wp-content/uploads/2021/03/branding-mockup-featuring-a-napkin-at-a-restaurant-table-a6854-1-768x576-min.jpg",
      altText: "Second slide",
      captionContent: <SecondSlide />,
    },
    {
      imgSrc:
        "https://assets.ncr.com/content/ncr/us/en/home/blogs/restaurants/future-of-qr-code-menus/_jcr_content/root/container/container_238116401_/container_1439208595/container_copy/image_copy_copy.coreimg.90.1600.jpeg/1663230678756/qr-code-121521.jpeg",
      altText: "Third slide",
      captionContent: <ThirdSlid />,
    },
  ];
  return (
    <>
      <div className="my-element">
        {!authorized ? (
          <Carousel fade>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  src={item.imgSrc}
                  alt={item.altText}
                  className="slider-img rounded-4"
                />
                <Carousel.Caption>{item.captionContent}</Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Navigate to="/information" />
        )}
      </div>
    </>
  );
}

export default Home;
