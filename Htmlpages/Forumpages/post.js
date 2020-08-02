//getting all the components.
var username = document.getElementById("username")
var category = document.getElementById("category")
var query = document.getElementById("post")
var query2 = document.getElementById("mainpost")
var  button = document.getElementById("submitpost")

var category = ['health','space','politics','technology','sports','movie']
for (i= 0 ; i<6 ; i++){
var fireheadref = firebase.database().ref(category[i]+'/post')

fireheadref.on('child_added',function(datasnapshot){
    
    var username = datasnapshot.child("username").val();
    
    var category = datasnapshot.child("category").val();

    var query = datasnapshot.child("query").val();
    
    var query2 = datasnapshot.child("query2").val();
    
    var date = datasnapshot.child("date").val();
   
        var content =""
                   content+=   '<tr style =>'
                   content+=    '<td ">'
                   content+=     '<h3 class="h5 mb-0"><a href="post.html"  action = '+query+'class="text-uppercase">'+query+'</a></h3>'
                   content+=      '<p class="mb-0" >'+'Description : '+query2+'</p>'
                      content+=  '</td>'
                        
                      content+='<td>'
                      content+=  '<div>By <a href="#0">'+username+'</a></div>'
                      content+='</td>'
                                              
                      content+='<td>'
                      content+=  '<div>On <a href="#0">'+date+'</a></div>'
                      content+='</td>'
                      content+='</tr>'
                      
                      
        if(category == 'sports'){
            
            $('#sports').append(content)
        }else if(category == 'health'){
            $('#health').append(content)
        }else if(category == 'space'){

            $('#space').append(content)
        }else if(category == 'politics'){

            $('#politics').append(content)
        }else if(category == 'technology'){

            $('#technology').append(content)
        }else if(category == 'movie'){

            $('#movie').append(content)
        }
    console.log(username+category+query+query2)
   
})
}


button.onclick=()=>{
    window.alert("Query is getting posted. . .");
    var username = document.getElementById("username").value
    var category = document.getElementById("category").value
    var query = document.getElementById("post").value
    var query2 = document.getElementById("mainpost").value
    var d = Date(Date.now()); 
    date = d.toString() 
    console.log(username+category+query+query2)

    writeUserData(username,category,query,query2,date)

}
function writeUserData(username,category,query,query2,date) {
    var categoryref = firebase.database().ref().child(category)
    var keyle= categoryref.push().key;
  
    var data = {
      username : username,
      category: category,
      query : query,
      query2:query2,
      date: date
    }
  var updates ={};
  updates['/'+category+'/'+'post'+'/'+keyle+'/']=data;
  firebase.database().ref().update(updates);
  alert("post has been created.");
  
  }
