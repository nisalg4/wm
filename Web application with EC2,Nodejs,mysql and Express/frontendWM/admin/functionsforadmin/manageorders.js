/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addRow() {
    var table = document.getElementById("myTableData");
    var orderid = document.getElementById("orderid");
    var clientdetails = document.getElementById("clientdetails");
    var ordertype= document.getElementById("ordertype");
    var orderprogress = document.getElementById("orderprogress");
    var employeeID= document.getElementById("employeeid");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= orderid.value;
    row.insertCell(1).innerHTML= clientdetails.value;
    row.insertCell(2).innerHTML= ordertype.value;
    row.insertCell(3).innerHTML= orderprogress.value;
    row.insertCell(4).innerHTML= employeeID.value;
    
     var url = "https://www.workmode.us/Cord";
     var body={};
     body.oid=orderid.value;
     body.cdet=clientdetails.value;
     body.otype=ordertype.value;
     body.oprog=orderprogress.value;
     body.empid=employeeID.value;
     var json=JSON.stringify(body);
     console.log(url);
                //var body = "oid="+orderid.value+"cdet="+clientdetails.value+"otype="+ordertype.value+"oprog="+orderprogress.value+"empid="+employeeID.value;
     var http = new XMLHttpRequest();
        console.log("POST", url + "?" + body);
                http.open("POST", url + "?" + body, true);
                http.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                http.onreadystatechange = function ()
                {
                    if (http.readyState === 4) {
                        console.log(http.responseText);

                    }
                };
                http.send(json);
 
}
 
function deleteRow() {
     var orid = document.getElementById("deletes");
console.log(orid);
    var url = "https://www.workmode.us/delo";
     var body={};
     body.oid=orid.value;
console.log(body.oid);
     var json=JSON.stringify(body);
console.log(json);
     console.log(url);
                //var body = "oid="+orderid.value+"cdet="+clientdetails.value+"otype="+ordertype.value+"oprog="+orderprogress.value+"empid="+employeeID.value;
     var http = new XMLHttpRequest();
        console.log("POST", url + "?" + body);
                http.open("POST", url + "?" + body, true);
                http.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                http.onreadystatechange = function ()
                {
                    if (http.readyState === 4) {
                        console.log(http.responseText);

                    }
                };
                http.send(json);
    
    
} 

 
function load() {
    
     var url = "https://www.workmode.us/orders";
                var body = "key=secret";
                var http = new XMLHttpRequest();

                console.log("GET", url + "?" + body);
                http.open("GET", url + "?" + body, true);
                http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                http.onreadystatechange = function ()
                {
                    if (http.readyState === 4) {
                        console.log(http.responseText);

                        var data = http.responseText;
                        var jsonResponse = JSON.parse(data);
                        
                        
                        var table = document.getElementById("myTableData");
                        var rowCount = table.rows.length;
                        var row = table.insertRow(rowCount);
                        
                        for (var i = 0; i < jsonResponse.length; i++) {
                         // console.log(jsonResponse[0]["orderid"]);
                            row.insertCell(0).innerHTML= jsonResponse[i]["orderid"];
                            row.insertCell(1).innerHTML= jsonResponse[i]["clientdetails"];
                            row.insertCell(2).innerHTML= jsonResponse[i]["ordertype"];
                            row.insertCell(3).innerHTML= jsonResponse[i]["orderprogress"];
                            row.insertCell(4).innerHTML= jsonResponse[i]["employeeID"];
                            row = table.insertRow(rowCount);
            }
                    }
                };
                http.send();
    console.log("Page load finished");
 
}
