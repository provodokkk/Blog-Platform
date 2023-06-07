
let staticWrapCounter = 1;

export class ArticleModel {
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.setAuthorNickname(this.currentUser);

        let data = 0;
    }

    addComment(self, e) {
        let data = {
            commentContainer:   '',
            wrapDiv:            '',

            textBox:            '',
            replyButton:        '',
            deleteButton:       '',

            replyTo:            '',
        };

        data.commentContainer = document.getElementById('allComments');;

        const marginLeftReplyButton = '4rem';
        data.replyButton = self.createButton('reply', 'Reply', marginLeftReplyButton);

        const marginLeftDeleteButton = '4rem';
        data.deleteButton = self.createButton('deleteComment', 'Delete', marginLeftDeleteButton);

        if(self.hasClass(e.target.parentElement, 'comments')) {
            // add to the main comment chain
            const marginLeft    = 0;
            data.wrapDiv        = self.createWrapDiv(marginLeft);

            data.replyTo        = self.getCommenterNickname(e, data.wrapDiv);
            data.textBox        = self.createTextBox(e, 'newComment', data.replyTo);
        } else {
            // add to the comment subchain
            data.wrapDiv        = e.target.parentElement;

            data.replyTo        = self.getCommenterNickname(e, data.wrapDiv);
            data.textBox        = self.createTextBox(e, '', data.replyTo);
        }

        self.data = data;
    }

    createWrapDiv(marginLeft) {
        const wrapDiv               = document.createElement('div');
        wrapDiv.className           = `wrapper-${staticWrapCounter++}`;
        wrapDiv.style.marginLeft    = marginLeft;

        return wrapDiv;
    }

    getCommenterNickname(e, wrapDiv) {
        // nickname of the person you are replying to
        const parent    = wrapDiv.parentElement
        let commenter   = ''

        if(e.target.parentElement.className != 'comments') {
            commenter = parent.querySelector('#commenter').textContent
        }

        return commenter;
    }

    replyComment(self, e) {
        const parentDiv                 = e.target.parentElement;
        const marginLeft                = self.getReplyMarginLeft(parentDiv);
        const wrapDiv                   = self.createWrapDiv(marginLeft);
        const textArea                  = self.createTextarea();

        const marginLeftAddButton       = '0rem';
        const addButton                 = self.createButton('addReply', 'Add', marginLeftAddButton);

        const marginLeftCancelButton    = '1rem';
        const cancelButton              = self.createButton('cancelReply', 'Cancel', marginLeftCancelButton);

        wrapDiv.append(textArea, addButton, cancelButton);
        parentDiv.appendChild(wrapDiv);
    }

    createButton(className, buttonText, marginLeft) {
        const button            = document.createElement('button');
        button.className        = className + " btn btn-primary btn-sm";
        button.innerHTML        = buttonText;
        button.style.marginLeft = marginLeft;
        button.style.marginTop  = '1rem';

        return button;
    }

    getReplyMarginLeft(parentDiv) {
        const parentMargin = Number.parseInt(parentDiv.style.marginLeft);

        if(parentMargin == 0) {
            return (parentMargin + 65).toString() + 'px';
        } else {
            return 0; 
        }
    }

    createTextarea() {
        const textArea              = document.createElement('textarea');
        textArea.className          = "form-control"
        textArea.style.marginRight  = '20px';
        textArea.style.marginTop    = '20px';

        return textArea;
    }

    createTextBox(e, elementId, replyTo) {
        const textBox       = document.createElement('div');
        textBox.innerHTML   = this.getStyledComment(e, elementId, replyTo);

        return textBox;
    }

    getStyledComment(e, elementId, replyTo) {
        const commentText   = this.getCommentText(e, elementId);
        const commenterName = this.currentUser.username;
        
        return `
        <div class="d-flex mt-3">
            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
            <div class="ms-3">
                <div id="commenter" class="fw-bold">${commenterName}</div>
                <span style="color: blue;">${replyTo}</span>
                ${commentText}
            </div>
        </div>
        `;
    }

    getCommentText(e, elementId) {
        let commentText = '';

        if(elementId != '') {
            commentText = document.getElementById(elementId).value;
            document.getElementById(elementId).value = '';
        } else {
            commentText = e.target.parentElement.firstElementChild.value;
        }

        return commentText;
    }

    setTemplate() {
        document.getElementById('allComments').innerHTML = localStorage.getItem('template');
    };

    setOnLocalStorage() {
        localStorage.setItem('template', document.getElementById('allComments').innerHTML);
    }

    clearLocalStorage() {
        localStorage.clear();
    }

    hasClass(elem, className) {
        return elem.className.split(' ').indexOf(className) > -1;
    }

    setAuthorNickname(currentUser) {
        document.getElementById('profile-nickname-ref').textContent = currentUser.username;
    }
}
