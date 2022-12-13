1
 
    


  
    // var pageNumber = 1;
    

    var lastBatch = null;
  
    var books = getAllBooks();;
   
    var startControlNumber=0;

    var lastBatch = getNextBatchOfBooks(books);

   

    console.log("startControlNumber = "+startControlNumber);

    $("#nBooksFound").text(books.length);

    

    /////////////
    // initializing books to interface
    ////////////

    addBookToInterface(lastBatch[startControlNumber]);
    
    function addBookToInterface(data){

        $("#bookContainer").html("");

        for( book of data ){

            let div = createDivBook(book.title,book.image);
       
            $("#bookContainer").append(div);

           }

           
    }

    setPageInfo(startControlNumber+1,lastBatch);

    function setPageInfo(page=1 , book){

        let info =  page + " - " + book.length;

        console.log(info);

        $("#Pageinfo").text(info);
       
        
    }

    function setCurrentBook(newBookS){
         books = newBookS;
        //  pageNumber=0;
         startControlNumber=0;
      
         lastBatch = getNextBatchOfBooks(books);


         addBookToInterface(lastBatch[startControlNumber]);
 
         setPageInfo(startControlNumber+1 , lastBatch);
 
         console.log(lastBatch);

         initializeBookcellEvent();
 
    }

    function nextPage(){

        if((startControlNumber+1) == lastBatch.length){
            console.log("on the last page");
            return;
        }

        // pageNumber++;
        
        startControlNumber++;

        // lastBatch = getNextBatchOfBooks(books);

        addBookToInterface(lastBatch[startControlNumber]);

        setPageInfo(startControlNumber+1 , lastBatch);

        console.log(lastBatch);
       

    }

    function prevPage(){

        if(startControlNumber == 0){
            console.log("on the first page");
            return;
        }


        // pageNumber--;
        startControlNumber--;

        // let batch = getNextBatchOfBooks(startControlNumber,books);

        addBookToInterface(lastBatch[startControlNumber]);

        setPageInfo(startControlNumber+1,lastBatch);

        console.log(lastBatch);
       

    }

   



    $("#nextBatch").click(function (e) { 
        e.preventDefault();

        nextPage();

        initializeBookcellEvent();

        
    });

    $("#prevBatch").click(function (e) { 
        e.preventDefault();
        
        prevPage();

        initializeBookcellEvent();

    });



    function createDivBook(title="", image=""){


        let div = "<div class='col-md-6 col-lg-3 bookcell rowBook'>";

        div += "<img src='"+ image +"' width='50%'>";

        div+="<br>"

        div+="<span class='bookName'>";

        div+=title;

        div+="</span>"

        div+="</div>"


        // console.log(div);


        return div;



    }

  

    
