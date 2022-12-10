

    

    var books = {};

    // var book = {
    //     title : null,
    //     description : null,
    //     page : null,
    //     image : null,
    //     src : null,
    //     refbiography : null
    // }

    
    
    function addnewBook(title="", image="" , src="" , refbiography=[] , author="",yearEdition=""){

        let b = {};

        b.title = title;
        b.image = image;
        b.src = src;
        b.refbiography = refbiography;
        b.author = author;
        b.yearEdition = yearEdition;

        
        let objBooks =  JSON.parse(localStorage.getItem("books"));

        if(objBooks==null){

            // creating new key with first val
            localStorage.setItem("books",JSON.stringify({
                arr : [b]
            }));

            return;
        }

        let arrBooks = objBooks["arr"];

    
        if (containsBook(b)) {
            console.log("book "+b.title+" already exists");
            return;
        }
        
        arrBooks.push(b);



        localStorage.setItem("books" , JSON.stringify({
            arr : arrBooks
        }))
        

        // console.log(arrBooks);

        // let arrBooks = objBooks["arr"];

        // console.log("books got");
        // console.log(arrBooks);
  

    //     localStorage.setItem("array",JSON.stringify(
    //         {
    //             arr : ["kester","edmilson","fernando","jonathan"]
    //         }
    //     ));


    //    let arr =   JSON.parse(localStorage.getItem("array"));
    //    console.log(arr);

    //     console.log("inserting books into local storage...");
    }


    function containsBook(book){

        console.log("=========== checking duplication =================");

       let arrBooks =  JSON.parse(localStorage.getItem("books"))["arr"];

       for( b  of arrBooks  ){

           if (b.title == book.title ) {
            return true;
           }

       }

       localStorage.getItem("books");
       return false;

    }


    function getAllBooks(){
        return JSON.parse(localStorage.getItem("books"))["arr"];
    }


    function getBook(title){

        let arrBooks = getAllBooks();

        for(book of arrBooks){

            if(title==book.title){
                return book;
            }

        }

        return false;

    }


    function getNumberOfBooks(){
        return getAllBooks.length;
    }

    // TODO: make a funtion to query books based on sequence of caracters
    // TODO: make same fun as above but for monography
    // TODO: Create new obj and array of monography





