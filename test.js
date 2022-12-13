// var s = "Kester Munetsi";
// var sl = s.toLowerCase();

// console.log("Includes : "+ sl.includes("mun"));






// var books = [1,2,3,4,5,6,7,8,9,10,
//              11,12,13,14,15,16,17,18,19,20,
//              21,22,23,24,25,26,27];

// const sizePerPage = 8;


// var p = getPages();

// function getPages(){

 
//     let c = books.length/sizePerPage;

//     let p = Math.ceil(c);
//     console.log("pages : "+p);



// }



// function getNextBatchOfBooks(startPoint){


//     let count = 0;

//     let batchBook = [];

//     for( var start = startPoint ; start < books.length ; start++){


//         if( count != sizePerPage ){

//             batchBook.push(books[start]);
//             count++;

//         }else{
//             return batchBook;
//         }
        
//     }


//     return batchBook;


// }



// function getPrevBatchBook(startPoint){

//     let count = sizePerPage-1;

//     let batchBook = [];

//     for( let start = startPoint ; start < books.length ; start--){

//         if(count >= 0 && start>=0 ){

//             batchBook.push(books[start]);
//             count--;

//         }else{
//             return batchBook;
//         }
        
//     }


//     return batchBook;
// }


function chunkArrayInGroups(ar, num) {
    return ar.reduce(function(r, v, i) {
      if (i % num == 0) r.push(ar.slice(i, i + num));
      return r;
    }, []);
  }
  
//   console.log(chunkArrayInGroups(["a", "b", "c", "d","e","1",1,2,3,4,5,6,2,1,3,4,5,3,1,5,7,8,2,4,6,1,5,2,4,3], 8))