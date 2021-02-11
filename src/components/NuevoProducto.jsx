export default function NuevoProducto() {
	return (
		<div className="row justify-content-center my-5">
			<div className="col-md-8">
				<div className="card">
					<div className="card-body">
						<h2 className="text-center mb-4 font-weight-bold">
							Agregar Nuevo Producto
						</h2>
						<form>
							<div className="form-group">
								<label>Nuevo Producto</label>
								<input
									type="text"
									className="form-control"
									placeholder="Nombre Producto"
									name="nombre"
								/>
							</div>
							<div className="form-group">
								<label>Precio Producto</label>
								<input
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
					</div>
				</div>
			</div>
		</div>
	);
}
