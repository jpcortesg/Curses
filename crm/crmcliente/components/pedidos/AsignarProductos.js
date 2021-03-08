import React, { useEffect, useState, useContext } from 'react'
import Select from 'react-select'
import { gql, useQuery } from '@apollo/client'
import PedidoContext from '../../context/pedidos/PedidoContext'

const OBTENER_PRODUCTOS = gql`
  query obtenerProductos{
    obtenerProductos{
      id
      nombre
      precio
      existencia
      creado
    }
  }
`

const AsignarProductos = () => {

  // State local del componente
  const [productos, setProductos] = useState([])

  // Context de pedidos
  const pedidoContext = useContext(PedidoContext)
  const { agregarProducto } = pedidoContext

  // Consulta a la base de datos
  const { data, loading, error } = useQuery(OBTENER_PRODUCTOS)

  useEffect(() => {
    // TODO : Función para pasar a pedido state
    agregarProducto(productos);
  }, [productos])

  const seleccionarProducto = producto => {
    setProductos(producto);
  }

  if(loading) return null
  const { obtenerProductos } = data

  return (
    <>
      <p className='mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 font-bold'>2.- Asigna un producto al pedido</p>
      <Select 
        className='mt-3'
        options= { obtenerProductos }
        onChange={ (opcion) => seleccionarProducto(opcion) }
        isMulti={true}
        getOptionValue={ (opciones) =>  opciones.id}
        getOptionLabel= { (opciones) => `${opciones.nombre} - ${opciones.existencia} Disponibles`}
        placeholder='Seleccione los productos'
        noOptionsMessage='No se encuentra el cliente'
      />
    </>
  )
}

export default AsignarProductos
