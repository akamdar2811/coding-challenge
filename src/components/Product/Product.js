import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Product.css';

class Product extends Component {

  openCarousel = (id) => {
    const elemId =  "thumbnails" + id;
    document.getElementById(elemId).style.width = "100%";
  }

  closeCarousel = (id) => {
    const elemId =  "thumbnails" + id;
    document.getElementById(elemId).style.width = "0%";
  }

  render() {

    const {id, name, hero, priceRange, images, links, messages} = this.props;
    const overlayId = "thumbnails" + id;
    const thumbnails = images.map((image, id) => {
      return (
        <Carousel.Item key={id}>
          <img className="img-thumbnail" src = { image.href } key = {id} alt = { image.alt }  width = { image.width + 'px'}  height = { image.height + 'px'} />
        </Carousel.Item> 
      )
    });
    const style = {
      color: "white"
    }

    return (
      <div className="product-info col-md-3 col-sm-12 col-xs-12">
        <a onClick={() => this.openCarousel(id)}>
          <img className="rounded product-img" src={hero.href} alt={hero.alt} width={hero.width + 'px'} height={hero.height + 'px'} />
        </a>
        
        <div id={overlayId} className="overlay">
          <a className="closebtn" style={style} onClick={() => this.closeCarousel(id)} >&times;</a>
          <div className="overlay-content">
            <Carousel>
              { thumbnails }
            </Carousel>
          </div>
        </div>

        <div>
          <h4 className="name">{name}</h4>
          <div className="price-detail">
            <p className="mrp">MRP: { priceRange.selling.high }</p>
            <p className="offer-price">Offer Price: {priceRange.selling.low }</p>
            <p className="discount-coupon">{messages[0]}</p>
          </div>
          
          <div>
            <a href={links.www} target="_blank" className="btn btn-primary btn-sm" role="button">Buy Now</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;