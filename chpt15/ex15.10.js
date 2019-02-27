//
// Post blog entries as selectable links to an output div.
//
// Each link is assigned a unique ID which allows
// for addressability and deletion.
//

var index = 0;		// Cheap version of uuid for each post.

function postEntry(inputForm) {
	var name = document.getElementById("nameentry").value
	var date = new Date();
	var text = date.toLocaleString().split(",")[0] + " " +
			name + ": " +
			document.getElementById("entry").value;
	var div = document.getElementById("blogOutput");
	var br1 = document.createElement("br");
	var br2 = document.createElement("br");
	var post = document.createElement("a");

	post.className = "blogLink";
	post.setAttribute("id", index);
	post.setAttribute("href", "#");
	post.setAttribute("onclick", "selectBlogPost(id)");
	post.innerHTML = text;
	div.appendChild(post);
	div.appendChild(br1);
	div.appendChild(br2);
	index++;
	hideDeleteBtn();
	return(false);
}

function selectBlogPost(id) {
	// First, deselect any previously selected post.
	// (We want at most one blog post to be selected at
	// one time.)

	var delBtn = document.getElementById("deleteBtn");
	var v = delBtn.style.visibility;
	if (v == "visible") {
		var index = delBtn.getAttribute("blogid");
		var deselectPost = document.getElementById(index);
		deselectPost.className = "blogLink";
	}

	// Selecting a post implies the ability to delete it.
	// Stow the ID of the selected post within an attribute
	// of the delete button so the handler for the button
	// knows what post to delete.

	post = document.getElementById(id);
	post.className = "blogSelected";
	var delIndex = id;	
	delBtn.setAttribute("blogid", delIndex);
	showDeleteBtn();
}

function deleteBlogPost() {
	var delBtn = document.getElementById("deleteBtn");
	var delIndex = delBtn.getAttribute("blogid");
	var post = document.getElementById(delIndex);

	var br = post.nextSibling;
	post.parentNode.removeChild(br);
	br = post.nextSibling;
	post.parentNode.removeChild(br);

	post.parentNode.removeChild(post);
	hideDeleteBtn();
}

function hideDeleteBtn() {
	elems = document.getElementsByName("clickVisible");
	for (var i = 0; i < elems.length; i++) {
		elems[i].style.visibility="hidden";
	}
	var delBtn = document.getElementById("deleteBtn");
	var delIndex = delBtn.getAttribute("blogid");
	post = document.getElementById(delIndex);
	if (post) {
		post.className = "blogLink";
	}
}

function showDeleteBtn() {
	elems = document.getElementsByName("clickVisible");
	for (var i = 0; i < elems.length; i++) {
		elems[i].style.visibility="visible";
	}
}
