import * as React from "react"

import { useQuery } from '@apollo/react-hooks';
import { getProducts } from '../queries/getProducts'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Featured from '../components/Featured'
import ProductsSection from '../components/ProductsSection';
import Product from '../components/Product';


const IndexPage = () => {  
  const { data, loading, error } = useQuery(getProducts);
  if (loading) {
      return <div>Fetching products...</div>
  }

  if (error) {
      return <div>{error.message}</div>
  }

  const products = data.productCategories.edges.products.edges || [];
  
  return(
    <Layout>
      <Seo title="Home" />
      <Hero />
      <ProductsSection title="Breakfast and Snacks">
        {/* {
          products.map((data, index) => (
            <Product key={index} name={data.name} price={data.price} button="Add to cart"/>
          ))
        }         */}
      </ProductsSection>
      <Featured />
    </Layout>
  )
}

export default IndexPage
