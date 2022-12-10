

$(".bookcell").click(function (e) { 
    e.preventDefault();

    let monName = e.currentTarget.children[2].innerText;

    var m = getMon(monName);

    $("#books-view").hide();
    $("#single-book").show();

    $("#titleBook").text(monName);
    $("#authorName").text(m.candidate);
    $("#yearEdition").text(m.course);

    $("#bioRef").html("");

    for( ref of m.refbiography){

        $("#bioRef").append("<li> "+ref+" </li>");

    }

    $("#bookSrc").attr("src", m.src);
    $("#btnSrc").attr("href", m.src);
    
});


$("#backtoBooks").click(function (e) { 
    e.preventDefault();
    $("#books-view").show();
    $("#single-book").hide();
});

// document.children
