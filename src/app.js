import post from './post';
import ui from './ui';
import user from './user';



post.findAll()
.then(ui.renderPosts)
.catch((error)=> console.log(error));

user.findRecent()
 .then(ui.renderUsers)
 .catch((error)=> console.log(error));
