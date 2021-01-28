var container= document.createElement("div");
container.setAttribute("class","container");


var row= document.createElement("div");
row.setAttribute("class", "row m-4 p-1");


var content= document.createElement("div");
content.setAttribute("class","offset-md-3 col-md-6 p-3");
content.style.backgroundColor="#fceb03";
content.style.borderRadius="8px";
content.style.border="2px solid black";

var form= document.createElement("div");
form.setAttribute("class","form-group");

var name_label= document.createElement("label");
name_label.setAttribute("for","name");
name_label.innerHTML=`Name`;

var name_input= document.createElement("input");
name_input.setAttribute("type","text");
name_input.setAttribute("placeholder","Your Name");
name_input.setAttribute("class","form-control");

var row_inside= document.createElement("div");
row_inside.setAttribute("class", "row");

var content_inside1= document.createElement("div");
content_inside1.setAttribute("class","col-lg-6");

var form_inside1= document.createElement("div");
form_inside1.setAttribute("class","form-group");

var name_label_inside1= document.createElement("label");
name_label_inside1.setAttribute("for","email");
name_label_inside1.innerHTML=`E-mail`;

var name_input_inside1= document.createElement("input");
name_input_inside1.setAttribute("type","text");
name_input_inside1.setAttribute("placeholder","example@gmail.com");
name_input_inside1.setAttribute("class","form-control");

form_inside1.append(name_label_inside1,name_input_inside1);
content_inside1.append(form_inside1);
row_inside.append(content_inside1);

var content_inside2= document.createElement("div");
content_inside2.setAttribute("class","col-lg-6");

var form_inside2= document.createElement("div");
form_inside2.setAttribute("class","form-group");

var name_label_inside2= document.createElement("label");
name_label_inside2.setAttribute("for","mobile");
name_label_inside2.innerHTML=`Mobile`;

var name_input_inside2= document.createElement("input");
name_input_inside2.setAttribute("type","text");
name_input_inside2.setAttribute("placeholder","+91 ***** *****");
name_input_inside2.setAttribute("class","form-control");

form_inside2.append(name_label_inside2,name_input_inside2);
content_inside2.append(form_inside2);
row_inside.append(content_inside2);

var form2= document.createElement("div");
form2.setAttribute("class","form-group");

var name_label2= document.createElement("label");
name_label2.setAttribute("for","subject");
name_label2.innerHTML=`Subject`;

var name_input2= document.createElement("input");
name_input2.setAttribute("type","text");
name_input2.setAttribute("placeholder","Your Subject");
name_input2.setAttribute("class","form-control");

var form3= document.createElement("div");
form3.setAttribute("class","form-group");

var name_label3= document.createElement("label");
name_label3.setAttribute("for","message");
name_label3.innerHTML=`Message`;

var name_input3= document.createElement("textarea");
name_input3.setAttribute("name","message");
name_input3.setAttribute("cols","20");
name_input3.setAttribute("rows","10");
name_input3.setAttribute("placeholder","Your Message Here......");
name_input3.setAttribute("class","form-control");

var submit= document.createElement("input");
submit.setAttribute("class","btn btn-block btn-primary");
submit.setAttribute("value","submit");

form3.append(name_label3,name_input3);
form2.append(name_label2,name_input2);
form.append(name_label,name_input);
content.append(form,row_inside,form2,form3,submit);
row.append(content);
container.append(row);
 
document.body.append(container);


