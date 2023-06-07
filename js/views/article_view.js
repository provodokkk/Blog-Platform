
export class ArticleView {
    constructor() { }

    addToHTML(data) {
        if(data.replyTo == '') {
            data.wrapDiv.append(data.textBox, data.replyButton, data.deleteButton);
            data.commentContainer.appendChild(data.wrapDiv);
        } else {
            data.wrapDiv.innerHTML = '';
            data.wrapDiv.append(data.textBox, data.replyButton, data.deleteButton);
        }
    }
}
