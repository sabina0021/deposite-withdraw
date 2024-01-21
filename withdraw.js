document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawvalue = getinputfieldbyid('withdraw-field');

    const withdrawelement=getelementfieldbyid('withdraw-element');

    const withdrawbalance=getelementfieldbyid('balance_');

    const withdrawamount=withdrawvalue+withdrawelement;
    const withdrawtotal=setelementbyid('withdraw-element', withdrawamount);

    const reducebalance=withdrawbalance-withdrawvalue;
    const reducesbalance=setelementbyid('balance_', reducebalance );
})