

$(".bookcell").click(function (e) { 
    e.preventDefault();

    let bookName = e.currentTarget.children[2].innerText;

    var b = getBook(bookName);

    $("#books-view").hide();
    $("#single-book").show();

    $("#titleBook").text(bookName);
    $("#authorName").text(b.author);
    $("#yearEdition").text(b.yearEdition);

    $("#bioRef").html("");

    for( ref of b.refbiography){

        $("#bioRef").append("<li> "+ref+" </li>");

    }

    $("#bookSrc").attr("src", b.src);
    $("#btnSrc").attr("href", b.src);
    
});


$("#backtoBooks").click(function (e) { 
    e.preventDefault();
    $("#books-view").show();
    $("#single-book").hide();
});

// document.children
