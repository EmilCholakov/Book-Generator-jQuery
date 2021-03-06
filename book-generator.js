let createBook = (function createBook() {
    let id = 1;
    return function(selector, title, author, ISBN) {

        let container = $(selector);
        let fragment = document.createDocumentFragment();

        let div = $("<div>");
        let pTitle = $("<p>");
        let pAuthor = $("<p>");
        let pIsbn = $("<p>");
        let selectBtn = $("<button>Select</button>");
        let deselectBtn = $("<button>Deselect</button>");

        div.attr("id", "book" + id);
        id++;
        pTitle.addClass("title");
        pAuthor.addClass("author");
        pIsbn.addClass("isbn");

        pTitle.append(title);
        pAuthor.append(author);
        pIsbn.append(ISBN);


        pTitle.appendTo(div);
        pAuthor.appendTo(div);
        pIsbn.appendTo(div);
        selectBtn.appendTo(div);
        deselectBtn.appendTo(div);
        div.appendTo(fragment);

        container.append(fragment);

        selectBtn.on("click", function () {
            div.css("border", "solid blue 2px")
        });

        deselectBtn.on("click", function () {
            div.css("border", "none");
        });
    }
}());