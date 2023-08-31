import { Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";

// https://nextjs.org/docs/app/building-your-application/rendering/server-components
// Kenit bekri Library kemla esmha Carousel
// zid ekhdem ala routing
// https://nextjs.org/docs/getting-started/project-structure
// https://nextjs.org/docs/pages/building-your-application/routing

function CarouselComp() {
  return (
    <Carousel>
      <CarouselItem>
        <div>hello</div>
        <CarouselCaption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <div>hello world!!</div>
        <CarouselCaption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </CarouselCaption>
      </CarouselItem>
      <CarouselItem>
        <div>helloksnldfln</div>
        <CarouselCaption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  );
}

export default CarouselComp;
