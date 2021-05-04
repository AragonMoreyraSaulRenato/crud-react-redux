import { Fragment, useEffect } from "react";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productoActions";

import Producto from "./Producto";
export default function Productos() {
  const dispatch = useDispatch();
  const { productos, error, loading } = useSelector((state) => state.productos);

  useEffect(() => {
    //CONSULTAR API
    dispatch(obtenerProductosAction());
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado Prodcutos</h2>
      {error && (
        <p className="font-weight-bold alert alert-danger text-center">
          Hubo un error
        </p>
      )}
      {loading && <p className="text-center">Cargando</p>}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Producto</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <th colSpan={3} className="text-center">
                No hay productos
              </th>
            </tr>
          ) : (
            productos.map((producto) => (
              <Producto
                key={`productos-tr-${producto.id}`}
                producto={producto}
              />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
}
