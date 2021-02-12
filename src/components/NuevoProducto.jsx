import { useState } from "react";
import { crearNuevoProductoAction } from "../actions/productoActions";
import { useDispatch, useSelector } from "react-redux";
import {
	mostrarAlertaAction,
	ocultarAlertaAction,
} from "../actions/alertaActions";

export default function NuevoProducto({ history }) {
	const [nombre, setNombre] = useState("");
	const [precio, setPrecio] = useState(0);
	const dispatch = useDispatch();

	const { loading, error } = useSelector((state) => state.productos);
	const { alerta } = useSelector((state) => state.alerta);

	const submitNuevoProducto = (e) => {
		e.preventDefault();

		//validar form
		if (nombre.trim() === "" || precio <= 0) {
			const alerta = {
				msg: "Ambos campos son obligatorios",
				classes: "alert alert-danger text-center text-uppercase p3",
			};
			dispatch(mostrarAlertaAction(alerta));
			return;
		}
		//si no hay erres
		dispatch(ocultarAlertaAction());
		//crear nuevo producto
		dispatch(crearNuevoProductoAction({ nombre, precio }));

		history.push("/");
	};

	return (
		<div className="row justify-content-center my-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
							Agregar Nuevo Producto
						</h2>
						{alerta && <p className={alerta.classes}>{alerta.msg}</p>}
						<form onSubmit={submitNuevoProducto}>
							<div className="form-group">
								<label>Nuevo Producto</label>
								<input
									value={nombre}
									onChange={(e) => setNombre(e.target.value)}
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
									onChange={(e) => setPrecio(Number(e.target.value))}
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
								Agregar
							</button>
						</form>
						{loading && <p>Cargando...</p>}
						{error && (
							<p className="alert alert-danger mt-4 p2 text-center">
								Hubo un error
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
