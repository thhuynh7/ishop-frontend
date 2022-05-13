import React from "react"
import { Card } from "antd"
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import laptop from "../../images/laptop.png"
import { Link } from "react-router-dom"
import { showAverage } from "../../functions/rating"

const { Meta } = Card

const ProductCard = ({ product }) => {
  const { images, title, slug, price } = product
  return (
    <>
      <Card style={{ backgroundColor: "#ffc266" }} cover={<img src={images && images.length ? images[0].url : laptop} style={{ height: "300px", objectFit: "cover" }} className="p-1" />}>
        <Link to={`/product/${slug}`}>
          {product && product.ratings && product.ratings.length > 0 ? showAverage(product) : <div className="text-center pt-1 pb-3">No rating yet</div>}
          <Meta title={`${title} - $${price}`} />
        </Link>
      </Card>
    </>
  )
}

export default ProductCard
