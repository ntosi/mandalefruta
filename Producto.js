import React from 'react';

class Producto extends React.Component{
    state = {cant: 0};
    comprar=()=> {
      this.setState({cant: this.state.cant + 1});
      this.props.evtTotal(this.props.precio)
    }
    mostrar=()=> {
      this.props.evtMostrar(this.props.nombre);
    } 
    render(){
      return(
          <div className="col-md-4">
            <div className="thumbnail">
              <img src={this.props.foto} width="250" height="200" alt="Foto de Ilustrativa" />
              <div className="caption">
                <h4 className="pull-right">${this.props.precio}</h4>
                <h4><a>{this.props.nombre}</a></h4>
                <p>{this.props.descripcion}</p>
              </div>
              <div className="ratings">
                  <p className="pull-right">15 Revisiones</p>
                  <p>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                    <span className="glyphicon glyphicon-star"></span>
                  </p>
                </div>
                <div >
                  <button className="btn btn-primary" onClick={this.comprar}>Comprar</button>
                  <button className="btn btn-danger" onClick={this.mostrar}>Mostrar</button>
                  <h4>Cantidad: {this.state.cant} item(s)</h4>
                </div>
              </div>
            </div>
      );
    }
  }

  export default Producto;