import {
	AGREGAR_PRODUCTO,
	AGREGAR_PRODUCTO_EXITO,
	AGREGAR_PRODUCTO_ERROR,
} from "../types/productosTypes";

//CREAR NUEVOS PRODUCTOS
export function crearNuevoProductoAction(producto) {
	return (dispatch) => {
		dispatch(agregarProducto());
		try {
			dispatch(agregarProductoExito(producto));
		} catch (error) {
			dispatch(agregarProductoError());
		}
	};
}

const agregarProducto = () => ({
	type: AGREGAR_PRODUCTO,
});

const agregarProductoExito = (producto) => ({
	type: AGREGAR_PRODUCTO_EXITO,
	payload: producto,
});

const agregarProductoError = (estado) => ({
	type: AGREGAR_PRODUCTO_ERROR,
	payload: estado,
});
