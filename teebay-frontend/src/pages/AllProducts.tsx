import React from 'react'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
    const data = React.useMemo(()=>{
        return Array(10).fill(1).map((p, index)=>{
            return {
                id: index,
                name: 'string',
    description: 'string',
    category: 'string',
    price: 'string',
    rentPerHour: 'string',
            }
        })
    }, [])
  return (
    <div className='mt-4'>
    <div>List of all Products</div>
    <div>
        {data.map((product)=> <ProductCard product={product}/>)}
    </div>
    </div>
  )
}

export default AllProducts