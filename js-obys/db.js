

const sizePerPage = 8;

    

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
            // console.log("book "+b.title+" already exists");
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

        // console.log("=========== checking duplication =================");

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
        return getAllBooks().length;
    }



    ///////////////////////
    //search bar algorithm
    ///////////////////////


    /// FUNCTION Deprecated...

    // function giveIntialBooks(){


    //     let books = getAllBooks();

    //     let initialBooks = [];

    //     if(getNumberOfBooks() < 8){

    //         for (let index = 0; index < getNumberOfBooks(); index++) {
            

    //             initialBooks.push(books[index]);
                
                
    //         }
    
    //         return initialBooks;
    

    //     }

    //     for (let index = 0; index < 8; index++) {
            

    //         initialBooks.push(books[index]);
            
            
    //     }

    //     return initialBooks;

    // }


    // function getNumberOfPagesBook(){

    //     let c = getNumberOfBooks()/sizePerPage;

    //     let p = Math.ceil(c);
    //     console.log("pages : "+p);

    //     return p;

    // }


    function getNextBatchOfBooks(data){

        // let pgTotal = Math.ceil(data.length/sizePerPage);

        let bookGroup = chunkArrayInGroups(data , sizePerPage);

        console.log("Creating "+bookGroup.length+" groups / pages");

        return bookGroup;

    }

    function createGroups(arr, numGroups) {

        const perGroup = Math.ceil(arr.length / numGroups);
        return new Array(numGroups)
          .fill('')
          .map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));

    }

    function chunkArrayInGroups(ar, num) {
        return ar.reduce(function(r, v, i) {
          if (i % num == 0) r.push(ar.slice(i, i + num));
          return r;
        }, []);
      }


    function getSearchBook( seqChar ){


        let books = getAllBooks();
        let newBooks = [];

       
 
        // console.log("Includes : "+ sl.includes("mun"));

        for( book of books ){

            
            if (book.title.toLowerCase().includes(seqChar.toLowerCase())) {


                newBooks.push(book);

                
            }

        }

        return newBooks;


    }




    // TODO: make a funtion to query books based on sequence of caracters
    // TODO: make same fun as above but for monography
    // TODO: Create new obj and array of monography



////////////////////////////////// Mon section //////////////////////////////////////////

function addnewMons(title="", image="" , src="" , refbiography=[] , candidate="",course=""){

    let b = {};

    b.title = title;
    b.image = image;
    b.src = src;
    b.refbiography = refbiography;
    b.candidate = candidate;
    b.course = course;

    
    let objMon =  JSON.parse(localStorage.getItem("mons"));

    if(objMon==null){

        // creating new key with first val
        localStorage.setItem("mons",JSON.stringify({
            arr : [b]
        }));

        return;
    }

    let arrMons = objMon["arr"];


    if (containsMon(b)) {
        console.log("Monography "+b.title+" already exists");
        return;
    }
    
    arrMons.push(b);



    localStorage.setItem("mons" , JSON.stringify({
        arr : arrMons
    }))
    
}


function getAllMons(){
    
    return JSON.parse(localStorage.getItem("mons"))["arr"];
}

function getMon(title){

    let arrMons = getAllMons();

    for(mon of arrMons){

        if(title==mon.title){
            return mon;
        }

    }

    return false;

}

function containsMon(mon){

    console.log("=========== checking duplication =================");

   let arrMons =  JSON.parse(localStorage.getItem("mons"))["arr"];

   for( m  of arrMons  ){

       if (m.title == mon.title ) {
        return true;
       }

   }

//    localStorage.getItem("books");
   return false;

}



///////////////////
/// search bar algorithm mon section
//////////////////





function getNextBatchOfMon(data){



    let monGroup = chunkArrayInGroups(data , sizePerPage);

    console.log("Creating "+monGroup.length+" groups / pages");

    return monGroup;

}



function getSearchMon( seqChar ){


    let mons = getAllMons();
    let newMons = [];

   

    // console.log("Includes : "+ sl.includes("mun"));

    for( mon of mons ){

        
        if (mon.title.toLowerCase().includes(seqChar.toLowerCase())) {


            newMons.push(mon);

            
        }

    }

    return newMons;


}