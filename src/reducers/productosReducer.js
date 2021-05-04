//CADA REDUCER TIENE SU PROPO STATE
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
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null
};

export default function productosReducer(state = initialState, action) {
  switch (action.type) {
    case DESCARGANDO_PRODUCTOS:
    case AGREGAR_PRODUCTO:
    case EDITAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload]
      };
    case DESCARGANDO_PRODUCTOS_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
    case ELIMINAR_PRODUCTO_ERROR:
    case EDITAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DESCARGANDO_PRODUCTOS_EXITO:
      return {
        ...state,
        productos: action.payload,
        loading: false,
        error: null
      };
    case ELIMINAR_PRODUCTO:
      return { ...state, productoEliminar: action.payload };
    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null
      };
    case EDITAR_PRODUCTO_OBTENER:
      return { ...state, productoEditar: action.payload };
    case EDITAR_PRODUCTO_EXITO:
      return {
        ...state,
        productoEditar: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id
            ? (producto = action.payload)
            : producto
        )
      };
    default:
      return state;
  }
}
