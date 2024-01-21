function getinputfieldbyid(inputid){
    const inputfield=document.getElementById(inputid);
    const inputfieldvalueString=inputfield.value;
    const inputfieldvalue=parseFloat(inputfieldvalueString);
    inputfield.value='';
    return inputfieldvalue;

}

function getelementfieldbyid(elementid){
    const elementfield=document.getElementById(elementid);
    const elementvalueString=elementfield.innerText;
    const elementvalue=parseFloat(elementvalueString);
    return elementvalue;
}

function setelementbyid(elementid, newvalue){
    const totalvalue=document.getElementById(elementid);
    totalvalue.innerText=newvalue;
}