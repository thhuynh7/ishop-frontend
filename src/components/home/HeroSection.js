import React, { useEffect, useState } from "react"
// filter
import { fetchProductsByFilter } from "../../functions/product"

import ImageCard from "../cards/ImageCard"

import "react-responsive-carousel/lib/styles/carousel.min.css"

import Carousel from "react-elastic-carousel"

const HeroSection = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    loadAllProducts()
  }, [page])

  const loadAllProducts = () => {
    setLoading(true)
    // filter by Bestseller prop
    fetchProductsByFilter({ bestseller: "Yes" }).then(res => {
      setProducts(res.data)
      setLoading(false)
    })
  }

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }
    // {width: 1200, itemsToShow: 4}
  ]

  return (
    <>
      <div className="container">
        <Carousel breakPoints={breakPoints} showArrows={true} autoPlay infiniteLoop>
          {products && products.map(product => <ImageCard product={product} />)}
        </Carousel>
      </div>
    </>
  )
}

export default HeroSection
