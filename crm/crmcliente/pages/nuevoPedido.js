import React, { useContext, useState, useEffect } from 'react'
import Layout from '../components/Layout'
import AsignarCliente from '../components/pedidos/AsignarCliente'

// Context de pedidos
import PedidoContext from '../context/pedidos/PedidoContext'

const NuevoPedido = () => {

  // Utilizar context y extraer sus valores
  const pedidocontext = useContext(PedidoContext)

  return (

    <Layout>
      <h1 className='text-2xl text-gray-800'>Crear Nuevo Pedido</h1>
      <AsignarCliente />
    </Layout>

  )
}

export default NuevoPedido
