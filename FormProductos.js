import React from 'react';

class FormProductos extends React.Component{
    submit = e =>{
      e.preventDefault(e)
      const producto = {
        nombre: this.refs.nombre.value,
        precio: parseInt(this.refs.precio.value, 10)
      }
      
      this.props.evtCrear(producto);
      this.refs.nombre.value="";
      this.refs.precio.value="";
    }
    
    render() {
      return (
      <form onSubmit={this.submit} className="form-group">
        <label htmlFor="productoNombre">Producto</label>
        <input type="text" className="form-control" placeholder="Producto Nombre" ref="nombre" id="productoNombre" />
        <label htmlFor="productoPrecio">Precio</label>
        <input type="text" className="form-control" placeholder="Producto Precio" ref="precio" id="productoPrecio" />
        <button className="btn btn-primary">Crear Producto</button>
      </form>    
      );
    }
  }

  export default FormProductos;