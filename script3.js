// This function uses jquery to get xml file information from selected theater. 
$(document).ready(function(){
   
   // when user selects theater and clicks "etsi" button function fetch timetable on selected theater.
   $("button").click(function(){
      //this clears everything from table before fetching new information. 
      $("#table").empty();
      // this creates new unordered list.
      $("#table").append("<ul></ul>"); 
      // this slides table on its position. 
      $("#content").animate({top: '1px'});
 // this gives value to url from selector on website.
      var theater = document.getElementById("theaterlist").value;
      //this slides selector to left side of screen.
       $("#movieSearch").animate({left: '50px'});
       // this part fetch xml file from external source. 
      $.ajax({
         type: "GET",
         url: "https://www.finnkino.fi/xml/Schedule/?area=" + theater + "&dt=",
         dataType: "xml",
         success: function(xml){
            // this part opens xml file and gives commands which information is wanted.
            $(xml).find('Show').each(function(){
               var starting = $(this).find('dttmShowStart').text();
               var auditorium = $(this).find('TheatreAuditorium').text();
               var title = $(this).find('Title').text();
               var genre= $(this).find('Genres').text();
               var image = $(this).find('EventSmallImagePortrait').text();
               // this part creates visible timetable which shows several information about theaters schedule. 
               $("<tr><td>").html("<td>" + "Alkaa:" + "<br>" + starting + "</td>" + "<td>" + auditorium + "</td> " + "<td>" + title + "</td> " + "<td>" + genre + "</td> " + "<td>" + "<img src =" + image + ">" + "</td>" + "</tr>").appendTo("#table ul");
            })
         }
      })    
     })
   }); 
   
