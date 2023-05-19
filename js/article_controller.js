import { ArticleModel } from './article_model.js';
import { ArticleView }  from './article_view.js';

import { isUserLogged } from './index.js';

class ArticleController {
    constructor() {
        var articleModel    = new ArticleModel();
        var articleView     = new ArticleView();

        document.getElementById('addComments').addEventListener('click', function(e) {
            articleModel.addComment(articleModel, e);
            articleView.addToHTML(articleModel.data);
            articleModel.setOnLocalStorage();
        });

        document.getElementById('allComments').addEventListener('click', function(e) {
            if (articleModel.hasClass(e.target, 'reply')) {
                articleModel.replyComment(articleModel, e);
            } else if(articleModel.hasClass(e.target, 'addReply')) {
                articleModel.addComment(articleModel, e);
                articleView.addToHTML(articleModel.data);
                articleModel.setOnLocalStorage();
            } else if(articleModel.hasClass(e.target, 'cancelReply')) {
                e.target.parentElement.innerHTML = '';
                articleModel.setOnLocalStorage();
            } else if(articleModel.hasClass(e.target, 'deleteComment')) {
                e.target.parentElement.remove();
                articleModel.setOnLocalStorage();
            }
        });

        // articleModel.clearLocalStorage();
        window.onload = articleModel.setTemplate(); 
    }
}

if(isUserLogged()) {
    new ArticleController();
}
