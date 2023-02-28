import React from 'react'

const productos = [
     { id: "1", nombre: 'Federico Crece ', descripcion: 'xxxxxxxxxxxx', stock: 5  },
    { id: "2", nombre: 'La Vaca se hamaca', descripcion: 'yyyyyyyyyyy', stock: 4 },
    { id: "3",  nombre: 'El mounstro de colores', descripcion: 'zzzzzzzzz', stock: 3  },
    { id: "4", nombre: 'El canto de las horas', descripcion: 'ffffffffffff', stock: 2 },
    { id: "5", nombre: 'El Color de la arena', descripcion: 'rrrrrrrrrrrrrrr', stock: 1 },
   { id: "6", nombre: 'Grey', descripcion: 'sssssssssssssss', stock: 0 },
]
const ItemDetailContainer = new Promise ((resolve, reject) => {
    setTimeout (() => {
      if (productos.length) {
            resolve (productos)
      } else {
          reject ("No hay stock") 
      }         
     }, 3000 )
       } )

ItemDetailContainer
.then((res) => {
    console.log(res)
})
.catch((err) => {
   console.log(err)
})



export default ItemDetailContainer