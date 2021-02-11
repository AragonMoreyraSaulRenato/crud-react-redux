import { Fragment } from "react";
export default function Productos() {
	return (
		<Fragment>
			<h2 className="text-center my-5">Listado Prodcutos</h2>
			<table className="table table-striped">
				<thead className="bg-primary table-dark">
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Producto</th>
						<th scope="col">Acciones</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</Fragment>
	);
}
