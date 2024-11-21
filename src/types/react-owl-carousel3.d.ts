declare module "react-owl-carousel3" {
  import { Component } from "react";

  interface OwlCarouselProps {
    items?: number;
    loop?: boolean;
    margin?: number;
    nav?: boolean;
    autoplay?: boolean;
    autoplayTimeout?: number;
    autoplayHoverPause?: boolean;
    responsive?: { [key: string]: any };
    [key: string]: any; // Allow any other prop
  }

  export default class OwlCarousel extends Component<OwlCarouselProps> {}
}
