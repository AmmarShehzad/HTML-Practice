function validation(){
var result=true;
var i=document.getElementsByTagName("input");


if(i[0].value.length==0 || i[1].value.length<=7 ){

alert(" UserName Or Password Is Not Correct");
result=false;

}




return (result);
}