import view from "../view/submission.html";

export default () => {
	const divElement = document.createElement("div");
	divElement.innerHTML = view;

	const batchTrack = document.getElementById("batchSelect");
	const getPost = async () => {
		const response = await fetch("http://localhost:8081/category/categories");
		const data = await response.json();
		console.log({ data });
		return data;
	};

	var apiStations = "http://localhost:8081/category/categories";
	fetch(apiStations, {
		method: "get",
	})
		.then((response) => response.json())
		.then((data) => {
			let allstations = data;
			console.log(data);
			let html = "";
			for (var i = 0; i < allstations.length; i++) {
				html +=
					"<option value=" +
					allstations[i].id_categories +
					">" +
					allstations[i].description +
					"</option>";
			}
			document.getElementById("subwaystation").innerHTML = html;
		});

	document.addEventListener("submit", function (event) {
		event.preventDefault();

		if (document.getElementById("Message").value == "") {
			alert("Comentario esta vacio");
		} else {
			var e = document.getElementById("subwaystation");
			var value = e.value;
			var text = e.options[e.selectedIndex].text;
			fetch("http://localhost:8081/submission/", {
				method: "POST",
				body: JSON.stringify({
					userData: {
						id: 1,
						name: "Juan Miguel",
						email: "juan@gmail.com",
						phoneNumber: "789456",
					},
					categories: {
						id_categories: value,
						description: text,
					},
					notification: {
						id_notification: 3,
						description: "Push_Notification",
					},
					message: document.getElementById("Message").value,
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			})
				.then((response) => alert("Agregado con exito"))
				.then((json) => console.log(json));
		}
	});

	return divElement;
};
