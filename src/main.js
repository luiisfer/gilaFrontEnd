import { router } from "./router/index.routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";

console.log("Hello world");

const init = () => {
	router(window.location.hash);

	window.addEventListener("hashchange", () => {
		router(window.location.hash);
	});
};

window.addEventListener("load", init);
