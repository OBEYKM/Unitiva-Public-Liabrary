1
 
    



  
    // var mons = getAllMons();

    // $("#nBooksFound").text(mons.length);

    

    
    // for( mon of mons ){

    //     console.log(mon);
    //  let div = createDivMon(mon.title,mon.image);

    //  $("#bookContainer").append(div);

    // }



    // function createDivMon(title="", image=""){


    //     let div = "<div class='col-md-6 col-lg-3 bookcell rowBook'>";

    //     div += "<img src='"+ image +"' width='50%'>";

    //     div+="<br>"

    //     div+="<span class='bookName'>";

    //     div+=title;

    //     div+="</span>"

    //     div+="</div>"


    //     console.log(div);


    //     return div;



    // }


    // console.log(" size of db "+$("#nBooksFound").text());

    // if($("#nBooksFound").text()=="0"){

    //     location.reload();
    //     console.log("error , no mons found , reloading the page!");

    // }
    

//////////////////////////////////////////////// new version code /////////////////////////////////////

1
 
    


  
    // var pageNumber = 1;
    

    var lastBatch = null;
  
    var mons = getAllMons();

   
    var startControlNumber=0;

    var lastBatch = getNextBatchOfMon(mons);

   

    console.log("startControlNumber = "+startControlNumber);

    $("#nBooksFound").text(mons.length);

    

    /////////////
    // initializing books to interface
    ////////////

    addMonsToInterface(lastBatch[startControlNumber]);
    
    function addMonsToInterface(data){

        $("#bookContainer").html("");

        for( mon of data ){

            let div = createDivBook(mon.title,mon.image);
       
            $("#bookContainer").append(div);

           }

           
    }

    setPageInfo(startControlNumber+1,lastBatch);

    function setPageInfo(page=1 , mons){

        let info =  page + " - " + mons.length;

        console.log(info);

        $("#Pageinfo").text(info);
       
        
    }

    function setCurrentMon(newMons){
         mons = newMons;
        //  pageNumber=0;
         startControlNumber=0;
      
         lastBatch = getNextBatchOfBooks(mons);


         addMonsToInterface(lastBatch[startControlNumber]);
 
         setPageInfo(startControlNumber+1 , lastBatch);
 
         console.log(lastBatch);

         initializeMoncellEvent();
 
    }

    function nextPage(){

        if((startControlNumber+1) == lastBatch.length){
            console.log("on the last page");
            return;
        }

        // pageNumber++;
        
        startControlNumber++;

        // lastBatch = getNextBatchOfBooks(books);

        addMonsToInterface(lastBatch[startControlNumber]);

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

        addMonsToInterface(lastBatch[startControlNumber]);

        setPageInfo(startControlNumber+1,lastBatch);

        console.log(lastBatch);
       

    }

   



    $("#nextBatch").click(function (e) { 
        e.preventDefault();

        nextPage();

        initializeMoncellEvent();

        
    });

    $("#prevBatch").click(function (e) { 
        e.preventDefault();
        
        prevPage();

        initializeMoncellEvent();

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

  

    
