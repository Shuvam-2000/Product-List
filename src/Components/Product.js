import {useState, React} from 'react'
import "./Product.css"
import Data from "./Data/Data.js"

const Product = () => {

  // filtering products by price & rating with usestate
  const [productItem, setProductItem] = useState(Data)

  // filter products of price above 30 and below 100
  const filterPrice = () => {
    const showItem = Data.filter((item) => {
                            return(
                              item.price >= 30 && item.price < 100
                            )              
              })
              setProductItem(showItem)
    }

  // filter products of price above 100
  const filterByHundred = () => {
      const showItem = Data.filter((item) => {
                              return(
                                item.price >= 100
                              )              
                })
                setProductItem(showItem)
      }

  // filter product by rating
  const filterRating = () => {
    const filterItem = productItem.filter((item) => {
                            return(
                              item.rating >= 4
                            )
    })
    setProductItem(filterItem)
  }

  // show all products
  const showAll = () => {
    setProductItem(Data)
  }

  return (
    <div className='container'>

    <div className='button-filter'>
    <button className="filter" onClick={showAll}>Show All Product</button>
      <button className="filter" onClick={filterPrice}>Above Rs.30</button>
      <button className="filter" onClick={filterByHundred}>Above Rs.100</button>
      <button className="rating" onClick={filterRating}>Rated 5</button>
    </div>

    <div className="cart">
      {
        productItem.map((product) => {
        return (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title}/>
            </div>
            <div className="product-details">
              <p className="product-title">{product.title}</p>
              <p className="product-price">Rs .{product.price}</p>
              <p className="product-rating">Rating: {product.rating}</p>
            </div>
            <button>Add To Cart</button>
          </div>
        );
      })}
    </div>
    </div>
  );
};



export default Product
