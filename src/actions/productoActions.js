import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  DESCARGANDO_PRODUCTOS,
  DESCARGANDO_PRODUCTOS_EXITO,
  DESCARGANDO_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO_OBTENER,
  EDITAR_PRODUCTO_EXITO,
  EDITAR_PRODUCTO_ERROR,
  EDITAR_PRODUCTO
} from "../types/productosTypes";
import Swal from "sweetalert2";
import clienteAxios from "../config/axios";

//CREAR NUEVOS PRODUCTOS
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      //INSERTAR EN EL API
      await clienteAxios.post("/productos", producto);
      //INSERTAR EN EL STATE
      dispatch(agregarProductoExito(producto));
      //ALERTA
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Uuups!",
        text: "Hubo un error, intenta nuevamente"
      });
      dispatch(agregarProductoError(true));
    }
  };
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true
});

const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado
});

//OBTIENE LOS PRODUCTOS
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());
    try {
      const respuesta = await clienteAxios.get("/productos");
      dispatch(descargarProductosExito(respuesta.data));
    } catch (error) {
      dispatch(descargaProductosError());
    }
  };
}

const descargarProductos = () => ({
  type: DESCARGANDO_PRODUCTOS,
  payload: true
});

const descargarProductosExito = (productos) => ({
  type: DESCARGANDO_PRODUCTOS_EXITO,
  payload: productos
});

const descargaProductosError = () => ({
  type: DESCARGANDO_PRODUCTOS_ERROR,
  payload: true
});

//SELECCIONA Y ELIMINA EL PRODUCTO
export function borrarProductoAction(id) {
  return async (dispatch) => {
    dispatch(eliminarProducto(id));
    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito());
      Swal.fire("Eliminado!", "El producto ha sido eliminado.", "success");
    } catch (error) {
      dispatch(eliminarProductoError());
    }
  };
}

const eliminarProducto = (id) => ({
  type: ELIMINAR_PRODUCTO,
  payload: id
});

const eliminarProductoExito = () => ({
  type: ELIMINAR_PRODUCTO_EXITO
});

const eliminarProductoError = () => ({
  type: ELIMINAR_PRODUCTO_ERROR,
  payload: true
});

export function obtenerProductoEdicionAction(producto) {
  return (dispatch) => {
    dispatch(obtenerProductoEdicion(producto));
  };
}

const obtenerProductoEdicion = (producto) => ({
  type: EDITAR_PRODUCTO_OBTENER,
  payload: producto
});

//EDITA UN REGISTRO EN EL API
export function editarProductoAction(producto) {
  return async (dispatch) => {
    dispatch(editarProducto());
    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto);
      dispatch(editarProductoExito(producto));
    } catch (error) {
      dispatch(editarProductoError());
    }
  };
}

const editarProducto = () => ({
  type: EDITAR_PRODUCTO,
  payload: true
});

const editarProductoExito = (producto) => ({
  type: EDITAR_PRODUCTO_EXITO,
  payload: producto
});

const editarProductoError = () => ({
  type: EDITAR_PRODUCTO_ERROR,
  payload: true
});
