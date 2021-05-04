import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { editarProductoAction } from "../actions/productoActions";
export default function EditarProducto() {
  const [producto, setProducto] = useState({ nombre: "", precio: 0, id: 0 });
  const { productoEditar } = useSelector((state) => state.productos);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (productoEditar) {
      setProducto(productoEditar);
    }
  }, [productoEditar]);

  if (!productoEditar) {
    return <Redirect to={"/"} />;
  }

  const { nombre, precio } = producto;

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProducto({ ...producto, [name]: value });
  };

  const submitEditarProducto = (e) => {
    e.preventDefault();
    dispatch(editarProductoAction(producto));
    history.push("/");
  };
  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  value={nombre}
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  value={precio}
                  onChange={onChange}
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-wight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
