function batmanBegins(){  
var trackList = ['1)Molosuss','2)Batman Theme','3)Ra_s a Gul']
for(i=0;i<trackList.length;i++){
    var para = document.createElement('p');
    var node = document.createTextNode(trackList[i]);
    para.appendChild(node);
    var element = document.getElementById('id01');
    element.appendChild(para);
}
var showImage = document.getElementById('id02');
showImage.style.display = 'block';
document.getElementById('id02').src='C:/Users/home/Documents/c drive/Documents/webindex/carousel image/Batman Begins.jpg';
}batmanBegins();

function blackPanther(){  
var trackList = ['1)Baba Maal','2)Wakanda Origin','3)United States']
for(i=0;i<trackList.length;i++){
    var para = document.createElement('p');
    var node = document.createTextNode(trackList[i]);
    para.appendChild(node);
    var element = document.getElementById('id01');
    element.appendChild(para);
}
var showImage = document.getElementById('id02');
showImage.style.display = 'block';
document.getElementById('id02').src='C:/Users/home/Documents/c drive/Documents/webindex/carousel image/Black Panther.jpg';
    
}blackPanther();



function bladeRunner(){  
var trackList = ['1)Blade Runner 2049','2)Sea Wall','3)The Escape']
for(i=0;i<trackList.length;i++){
    var para = document.createElement('p');
    var node = document.createTextNode(trackList[i]);
    para.appendChild(node);
    var element = document.getElementById('id01');
    element.appendChild(para);
}
var showImage = document.getElementById('id02');
showImage.style.display = 'block';
document.getElementById('id02').src='C:/Users/home/Documents/c drive/Documents/webindex/carousel image/Blade Runner 2049.jpg';
        
}bladeRunner();


/*function para(){
    console.log(document.getElementById('para').innerHTML='hello');
}para();
/*console.log(this.trackName[i]);
console.log(Batman_Begins.trackName[i]);
/*console.log(Batman_Begins.trackName[1]);
console.log(Batman_Begins.trackName[2]);*/

/* alternate using objects
    var movieList = {
        Batman_Begins:['1)Molosuss','2)Batman Theme','3)Ra_s a Gul'],
        Black_Panther:['1)Baba Maal','2)Wakanda Origin','3)United States'],
        Blade_Runner_2049:['1)Blade Runner 2049','2)Sea Wall','3)The Escape']
    }
    /*for(var list in movieList){
        for(var listInside in movieList[list]){
            console.log(movieList[list][listInside]);
        }
    }*/
   /* var i = document.getElementById('image');
    i.addEventListener('click',function(){
        /*for(i=0;i<movieList.Batman_Begins.length;i++){
            var para_i = document.createElement('p');
            var node_i = document.createTextNode(movieList[list][listInside]);
            para_i.appendChild(node_i);
            var element_i = document.getElementById('id01');
            element_i.appendChild(para_i);
        }*/
       /* for(var list in movieList){
                var para = document.createElement('p');
                var node = document.createTextNode(movieList[list][0]);
                para.appendChild(node);
                var element = document.getElementById('id01');
                element.appendChild(para);
            
        }   
    });
    var showImage = document.getElementById('id02');
    showImage.style.display = 'block';
    document.getElementById('id02').src='C:/Users/home/Documents/c drive/Documents/webindex/carousel image/Batman Begins.jpg';*/
