import view from "../view/posts.html";

const getSubmission = async () => {
	const response = await fetch("http://localhost:8081/submission/orderAsc/");
	return await response.json();
};

export default async () => {
	const divElement = document.createElement("div");
	divElement.innerHTML = view;

	const postsElement = divElement.querySelector("#posts");
	const totalPosts = divElement.querySelector("#total");

	const posts = await getSubmission();

	posts.forEach((post) => {
		var today = new Date(post.publishedDate);
		postsElement.innerHTML += `
      <li class="list-group-item border-light bg-dark text-white">
      <h5>${post.submissionID}</h5>
      <p>
      ${post.userData.name}
      </p>
      <p>
      ${post.message}
      </p>
      <p>
      ${today.toLocaleDateString("en-US")}
      </p>
      </li>
    `;
	});

	totalPosts.innerHTML += posts.length;

	return divElement;
};
