/* 
    name: bruce y phommaly
    student id: 14215222
    date: 04/12/17
*/

function getHome() {
    $("#contentBox").html("Loading....");
            
    $.get("http://ec2-54-208-197-167.compute-1.amazonaws.com/PublicChallenges/Challenge9/webService.php?content=home", 
    
    function(data) {
        $("#contentBox").html(data);
    });
}   

function getXML() {
    var xhttp = new XMLHttpRequest();

    document.getElementById("contentBox").innerHTML = "Loading...";
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    
    xhttp.open("GET", "http://ec2-54-208-197-167.compute-1.amazonaws.com/PublicChallenges/Challenge9/webService.php?content=data&format=xml", true);
    xhttp.send();

    function myFunction(xml) {    
        var name, period, i, xmlDoc, txt;
        xmlDoc = xml.responseXML;
        txt = "";
        
        name = xmlDoc.getElementsByTagName("name");
        period = xmlDoc.getElementsByTagName("period");

        txt += "<ul>";
        
        for (i = 0; i< name.length && period.length; i++) {
            
            txt += "<li>" + name[i].childNodes[0].nodeValue + ' lived during the ' + period[i].childNodes[0].nodeValue + "</li>";
            document.getElementById("contentBox").innerHTML = txt;
        }
        txt += "</ul>";
    }
}

function getJSON() {
    var txt;
    txt = "";
    
    $("#contentBox").html("Loading....");

    $.getJSON('http://ec2-54-208-197-167.compute-1.amazonaws.com/PublicChallenges/Challenge9/webService.php?content=data&format=json',
              
    function(data) {
        txt += "<ul>";
        for(i = 0; i < data.length; i++)
        {
            txt += "<li>" + data[i].name + " was a " + data[i].diet + "</li>";
            $("#contentBox").html(txt);
        }
        txt += "</ul>";        
    });
}
              