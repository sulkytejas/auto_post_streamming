import xss from "xss-filters";

let ui = {
	renderPosts(posts){
		let elements = posts.map( (post) => {
			let {title, lastReply} = post;

			return articleTemplate(post.title,post.lastReply);
		})

		let target = document.querySelector(".container");
		target.innerHTML = elements.join(" "); 
	},

	renderUsers(users){

   

    let elements = users.map( (user) => {
    
      let { name, avatar } = user;
      alert(user);
      return activeUsersTemplate(user.name, user.avatar);
    });

    let target = document.querySelector(".user-container");
    target.innerHTML = elements.join(" ");
  }

};


function articleTemplate(title, lastReply){ 
    
    let safeTitile = xss.inHTMLData(title);
    let safeLastReply = xss.inHTMLData(lastReply);  		
	let template = `
						<article class='post'>
							<h2 class='post-title'>
							 	${safeTitile}
							 </h2>
							 <p class="post-meta">
							  	${safeLastReply }
							  <p>
							  
						<article>
                   

						`;
return template;
}

function activeUsersTemplate(name, avatar){

  let safeName = xss.inHTMLData(name);
  let safeAvatar = xss.inHTMLData(avatar);

  let template = `
    <div class="active-avatar">
    <img width="54" src="assets/images/${safeAvatar}">
    <h5 class="post-author">${safeName}</h5>
    </div>`;

  return template;
}



export default ui ;