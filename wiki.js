let searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";


  let userInput = $('#searchInput');
  


  $('button').on('click',()=>{
    let term = userInput.val();
    let url = searchUrl + term + "&format=json&callback=?";
    

    $.ajax({
      url: url,
      contentType:'application/json; charset=utf-8',
      async:false,
      dataType: "json",
      success: function(data) {
        $("#result").html('');
        if(!data[1].length) {
          $("#result").append("<h2 class='error'>please enter real data!!!</h2>")
        } else {
          for(let i =0;i<data[1].length;i++) {
            $("#result").append(
              "<a class='data' href='"+data[3][i]+"' target='_blank'><h3>"+data[1][i]+"</h3></a>"
            );
          }
        }
        $("#result").append(
          "Coded By <a href='https://www.facebook.com/profile.php?id=100013908463750' target='_blan'>Ahmed Ibrahim</a>"
          );
      }
  }).done(
    ()=>{
      console.log("success");
    }
  ).fail(
    ()=>{
      console.log("error")
    }
  )
    
  })