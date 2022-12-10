1
 
    



  
    var mons = getAllMons();

    $("#nBooksFound").text(mons.length);

    

    
    for( mon of mons ){

        console.log(mon);
     let div = createDivMon(mon.title,mon.image);

     $("#bookContainer").append(div);

    }



    function createDivMon(title="", image=""){


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






