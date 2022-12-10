1
 
    



  
    var books = getAllBooks();

    $("#nBooksFound").text(books.length);

    

    
    for( book of books ){

     let div = createDivBook(book.title,book.image);

     $("#bookContainer").append(div);

    }



    function createDivBook(title="", image=""){


        let div = "<div class='col-md-6 col-lg-3 bookcell rowBook'>";

        div += "<img src='"+ image +"' width='50%'>";

        div+="<br>"

        div+="<span class='bookName'>";

        div+=title;

        div+="</span>"

        div+="</div>"


        console.log(div);


        return div;



    }






