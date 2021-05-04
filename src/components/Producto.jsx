import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  borrarProductoAction,
  obtenerProductoEdicionAction
} from "../actions/productoActions";
import Swal from "sweetalert2";
export default function Producto({ producto }) {
  const { nombre, precio, id } = producto;
  const dispatch = useDispatch();
  const history = useHistory();

  //CONFIRMAR ELIMINACION
  const confirmarEliminarProducto = (id) => {
    //PREGUNTAR AL USUARIO
    Swal.fire({
      title: "¿Estas seguro de eliminarlo?",
      text: "No podras revertir este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(borrarProductoAction(id));
      }
    });
    //PASARLO AL ACTION
  };

  const redireccionarEdicion = (producto) => {
    dispatch(obtenerProductoEdicionAction(producto));
    history.push(`/productos/editar/${producto.id}`);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">$ {precio}</span>
      </td>
      <td className="acciones text-center">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => redireccionarEdicion(producto)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
