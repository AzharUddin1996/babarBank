// step-1
document.getElementById('withdrow-btn').addEventListener('click', function () {
    // step-2
    const inputFiledEta = document.getElementById('input-field-withdraw');
    // step-3
    const etaHoloInputFilederTextString = inputFiledEta.value;
    // step-4 convaert
    const convartStringByFloatWithdrwoAmount = parseFloat(etaHoloInputFilederTextString);
    inputFiledEta.value = '';

    // stetp-5

    const totalWithdrawAmountbox = document.getElementById('total-withdrow-amount');
    const totalWithdrawAmountElementString = totalWithdrawAmountbox.innerText;

    const convartFloatingwithdrawAmount = parseFloat(totalWithdrawAmountElementString);

    totalWithdrawAmountbox.innerText = convartFloatingwithdrawAmount + convartStringByFloatWithdrwoAmount;



    const balanceTotal = document.getElementById('balance-box-Amount');
    const balanceTotalElementString = balanceTotal.innerText;
    const convartFloatbalanceTotal = parseFloat(balanceTotalElementString);
    const calculateThebalanceTotal = convartFloatbalanceTotal - convartStringByFloatWithdrwoAmount;
    balanceTotal.innerText = calculateThebalanceTotal;




})