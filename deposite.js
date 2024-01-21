document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeinputvalue=getinputfieldbyid('deposite-field');
    
    const depositevalue=getelementfieldbyid('deposite_');

    const totalbalance=getelementfieldbyid('balance_');

    const totaldeposite=depositeinputvalue+depositevalue;
    const total=setelementbyid('deposite_', totaldeposite);

    const balance =depositeinputvalue+totalbalance;
    const BALANCES=setelementbyid('balance_', balance);
})