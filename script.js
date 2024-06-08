function label_create(tagname,attrname,attrvalue,content){
    var ele =document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML = content;
    return ele;
}

function break_create(){
    var label_break = document.createElement("br");
    return label_break
}

function input_create(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var input_ele =document.createElement(tagname);
    input_ele.setAttribute(attrname,attrvalue);
    input_ele.setAttribute(attrname1,attrvalue1);
    return input_ele;
}

var email = label_create("label","for","email","Email");
var email_break = break_create();
var input_email = input_create("input","type","email","id","email")
//document.body.append(email,email_break,input_email)
var input_break = break_create();

//firstname, Middlename, Lastname,Password,FileUpload using DOM 
var firstname = label_create("label","for","firstname","firstname");
var firstname_break = break_create();
var input_firstname = input_create("input","type","text","id","firstname")
var input1_break = break_create();


var middlename = label_create("label","for","middlename","middlename");
var middlename_break = break_create();
var input_middlename = input_create("input","type","text","id","middlename")
var inputmiddle_break = break_create();
//document.body.append(middlename,middlename_break,input_middlename)

var input2_break = break_create();

var lastname = label_create("label","for","lastname","Lastname");
var lastname_break = break_create();
var input_lastname = input_create("input","type","text","id","lastname")
//document.body.append(lastname,lastname_break,input_lastname)


var input3_break = break_create();
var Password = label_create("label","for","Password","Password");
var Password_break = break_create();
var input_Password = input_create("input","type","Password","id","Password")
//document.body.append(Password,Password_break,input_Password)

var input4_break = break_create();
var file = label_create("label","for","file","File");
var file_break = break_create();
var input_file = input_create("input","type","file","id","file")

document.body.append(email,email_break,input_email,input_break,
    firstname,firstname_break,input_firstname,input1_break,
    middlename,middlename_break,input_middlename,inputmiddle_break,
    lastname,lastname_break,input_lastname,input2_break,
    Password,Password_break,input_Password,input3_break)
document.body.append(file,file_break,input_file)
