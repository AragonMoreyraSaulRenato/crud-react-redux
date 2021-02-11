import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";

//REDUX
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Router>
			<Provider store={store}>
				<Header />
				<div className="container">
					<Switch>
						<Route exact path="/" component={Productos} />
						<Route exact path="/productos/nuevo" component={NuevoProducto} />
						<Route
							exact
							path="/productos/edita/:id"
							component={EditarProducto}
						/>
					</Switch>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
