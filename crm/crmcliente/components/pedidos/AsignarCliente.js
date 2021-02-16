import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { gql, useQuery } from '@apollo/client'

const OBTENER_CLIENTES_USUARIO = gql`
  query obtenerClientesVendedor{
    obtenerClientesVendedor{
      id
      nombre
      apellido
      empresa
      email
    }
  }
`

const AsignarCliente = () => {

  const [cliente, setCliente] = useState([])

  // Consultar la base de datos
  const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO) 

  useEffect(() => {
    console.log(cliente);
  }, [cliente])

  const seleccionarCliente = cliente => {
    setCliente(cliente)
  }

  // Resultados de la consulta
  if(loading) return null

  const { obtenerClientesVendedor } = data

  return (
    <>
      <p className='mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 font-bold'>1.- Asigna un Cliente al pedido</p>
      <Select 
        className='mt-3'
        options= { obtenerClientesVendedor }
        onChange={ (opcion) => seleccionarCliente(opcion) }
        getOptionValue={ (opciones) =>  opciones.id}
        getOptionLabel= { (opciones) => opciones.nombre}
        placeholder='Seleccione el cliente'
        noOptionsMessage='No se encuentra el cliente'
      />
    </>
  )
}

export default AsignarCliente
