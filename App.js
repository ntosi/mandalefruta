import React, { Component } from 'react';
import Producto from './Producto';
import FormProductos from './FormProductos';
import Total from './Total';
import Header from './Header';
import NavBar from './NavBar';

class App extends Component {
    state={total: 0,
      stockProductos: [
        {nombre: "fruta1", precio: 11, descripcion:"fruta zaraza", foto: "https://i.blogs.es/f78dc6/pera/450_1000.jpg"},  
        {nombre: "fruta2", precio: 13, descripcion:"lorem ipsum dolor sit amet", foto: "./img/frutas02.jpg"},  
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "./img/frutas03.jpg"},  
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "./img/frutas04.jpg"},  
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas05.jpg"},  
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas06.jpg"},
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas07.jpg"},  
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas08.jpg"},  
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas09.jpg"},  
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas10.jpg"},  
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas11.jpg"},
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas12.jpg"},
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas13.jpg"},    
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas14.jpg"},
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas15.jpg"},
        {nombre: "fruta3", precio: 65, descripcion:"Este es el zaraza de la zaraza perque zaraza", foto: "img/frutas16.jpg"},
      ]
    };
  
  crearProducto = producto =>{
    this.setState({
      stockProductos: this.state.stockProductos.concat(producto)
    })
  }
  
  calcularTotal= precio=> {
    this.setState({total: this.state.total + precio});
  }
  
  mostrarProducto= nombre=> {
    alert("Ha seleccionado " + nombre);
  }
  
  render() {
    var componente = this;
    var productos = this.state.stockProductos.map(function(producto, i){
      return (
        <Producto key={i} 
                  nombre={producto.nombre} 
                  precio={producto.precio}
                  descripcion={producto.descripcion}
                  foto={producto.foto}
                  evtMostrar={componente.mostrarProducto}
                  evtTotal={componente.calcularTotal}/>
      )
    });
    
    return(
      <div >
      <Header />
      <NavBar />

      <section id="products">
        <article className="row">
          {productos}
        </article>  
      </section>
      <hr />
        <Total role="alert" total={this.state.total}/>
      <hr />  
      <h2>Agregar Producto</h2>
      <hr />
      <FormProductos evtCrear={this.crearProducto}/>
      <footer>
        <p>Tienda Copyright &copy; 2019 - <a >Terminos</a> &middot; <a >Privacidad</a></p>
      </footer>  

      </div>
    )
  }
}

export default App;
