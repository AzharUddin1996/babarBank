// step-1
document.getElementById('deposit-btn').addEventListener('click', function () {
    // step-2
    const depositFiled = document.getElementById('deposit-field');

    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step-3
    depositFiled.value = '';
    // step-4
    const depositTotalElement = document.getElementById('deposit-total-amount');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;


    // balance
    const balanceTotalElement = document.getElementById('balance-box-Amount');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;

















    // const balanceWithdrawTotalElement = document.getElementById('input-field-withdraw');
    // const previousWithdrowTotalString = balanceTotalElement.inner.value;
    // const newWithdrawTotal = parseFloat(previousWithdrowTotalString);

    // const newBalanceTotal = newBalanceTotal - newWithdrawTotal;
    // balanceTotalElement.innerText = newBalanceTotal;
    // const balanceTotalElement = document.getElementById('balance-box-Amount');
    // const previousBalanceTotalString = balanceTotalElement.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotalElement.innerText = newBalanceTotal;


})