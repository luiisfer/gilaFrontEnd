import { pages } from "../controllers/index";

const router = async (route) => {
	let content = document.getElementById("root");
	content.innerHTML = "";

	console.log(route);

	switch (route) {
		case "#/": {
			return content.appendChild(pages.home());
		}
		case "#/submission": {
			return content.appendChild(pages.submission());
		}
		case "#/log": {
			return content.appendChild(await pages.posts());
		}
		default: {
			return content.appendChild(pages.notFound());
		}
	}
};

export { router };
