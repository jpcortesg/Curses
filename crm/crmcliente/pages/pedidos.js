import Layout from './../components/Layout'
import Link from 'next/link'

import React from 'react'

function pedidos() {
  return (
    <div>
      <Layout>
        <h1 className='text-2xl text-gray-800'>Pedidos</h1>
        <Link href='/nuevoPedido'>
          <a className='bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded hover:bg-gray-800 mb-3 uppercase'>Nuevo Pedido</a>
        </Link>
      </Layout>
    </div>
  )
}

export default pedidos