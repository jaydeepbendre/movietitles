fetch("/movies.json")
.then((res) => res.json())
.then((data) => {
    console.log(data[0].Title);

    document
        .getElementById("movieimage")
        .setAttribute("src",data[0].imageurl);

    document.getElementById("title").innerText= data[0].Title;
    document.getElementById("runtime").innerText= data[0].Runtime;
    document.getElementById("rating").innerText= data[0].IMDbRating;
    
    document
        .getElementById("movielink")
        .setAttribute("href",data[0].URL);

/*---------------------------------------------------------------------------*/

        document
        .getElementById("movieimage1")
        .setAttribute("src",data[1].imageurl);

    document.getElementById("title1").innerText= data[1].Title;
    document.getElementById("runtime1").innerText= data[1].Runtime;
    document.getElementById("rating1").innerText= data[1].IMDbRating;
    
    document
        .getElementById("movielink1")
        .setAttribute("href",data[1].URL);   
     
/*---------------------------------------------------------------------------*/


        document
        .getElementById("movieimage2")
        .setAttribute("src",data[2].imageurl);

    document.getElementById("title2").innerText= data[2].Title;
    document.getElementById("runtime2").innerText= data[2].Runtime;
    document.getElementById("rating2").innerText= data[2].IMDbRating;
    
    document
        .getElementById("movielink2")
        .setAttribute("href",data[2].URL);           
            

/*---------------------------------------------------------------------------*/


document
.getElementById("movieimage3")
.setAttribute("src",data[3].imageurl);

document.getElementById("title3").innerText= data[3].Title;
document.getElementById("runtime3").innerText= data[3].Runtime;
document.getElementById("rating3").innerText= data[3].IMDbRating;

document
.getElementById("movielink3")
.setAttribute("href",data[3].URL);           
    

/*---------------------------------------------------------------------------*/


document
.getElementById("movieimage4")
.setAttribute("src",data[14].imageurl);

document.getElementById("title4").innerText= data[14].Title;
document.getElementById("runtime4").innerText= data[14].Runtime;
document.getElementById("rating4").innerText= data[14].IMDbRating;

document
.getElementById("movielink4")
.setAttribute("href",data[14].URL);           
    
/*---------------------------------------------------------------------------*/


document
.getElementById("movieimage5")
.setAttribute("src",data[5].imageurl);

document.getElementById("title5").innerText= data[5].Title;
document.getElementById("runtime5").innerText= data[5].Runtime;
document.getElementById("rating5").innerText= data[5].IMDbRating;

document
.getElementById("movielink5")
.setAttribute("href",data[5].URL);           
    


/*---------------------------------------------------------------------------*/


document
.getElementById("movieimage6")
.setAttribute("src",data[6].imageurl);

document.getElementById("title6").innerText= data[6].Title;
document.getElementById("runtime6").innerText= data[6].Runtime;
document.getElementById("rating6").innerText= data[6].IMDbRating;

document
.getElementById("movielink6")
.setAttribute("href",data[6].URL);           
    

/*---------------------------------------------------------------------------*/


document
.getElementById("movieimage7")
.setAttribute("src",data[7].imageurl);

document.getElementById("title7").innerText= data[7].Title;
document.getElementById("runtime7").innerText= data[7].Runtime;
document.getElementById("rating7").innerText= data[7].IMDbRating;

document
.getElementById("movielink7")
.setAttribute("href",data[7].URL);           
    


/*---------------------------------------------------------------------------*/


document
.getElementById("movieimage8")
.setAttribute("src",data[8].imageurl);

document.getElementById("title8").innerText= data[8].Title;
document.getElementById("runtime8").innerText= data[8].Runtime;
document.getElementById("rating8").innerText= data[8].IMDbRating;

document
.getElementById("movielink8")
.setAttribute("href",data[8].URL);           
    

/*---------------------------------------------------------------------------*/


document
.getElementById("movieimage9")
.setAttribute("src",data[9].imageurl);

document.getElementById("title9").innerText= data[9].Title;
document.getElementById("runtime9").innerText= data[9].Runtime;
document.getElementById("rating9").innerText= data[9].IMDbRating;

document
.getElementById("movielink9")
.setAttribute("href",data[9].URL);           
    












    
}) 