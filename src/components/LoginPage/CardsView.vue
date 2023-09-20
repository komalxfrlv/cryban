<template>
    SUKA
<div class="cards">
  <div class="coin-one">
    <div class="coin-title">
        <div class="coin-icon-and-name">
            <div class="coin-icon">BC</div>
            <text class="coin-full-name">Bank Coin (BCoin)</text>
        </div>
        <text class="coin-manage">Manage >>></text>
    </div>
    <div class="coin-name">
        <text class="coin-short-name-price">BCoin 0.35</text>
    </div>
    <text class="coin-info">Address: 0x1123cv...c0990123</text>
    <div class="coin-buttons">
        <div class="button">
            <div class="icon">I</div>
            <text class="text">Stake</text>
        </div>
        <div class="button">
            <div class="icon">I</div>
            <text class="text">Withdraw</text>
        </div>
        <div class="button">
            <div class="icon">I</div>
            <text class="text">What is BCoin</text>
        </div>
    </div>
  </div>
  <div class="coin-two">
    <div class="coin-title">
        <div class="coin-icon-and-name">
            <div class="coin-icon">BSC</div>
            <text class="coin-full-name">Bank Supra Coin (BSC)</text>
        </div>
        <text class="coin-manage">Manage >>></text>
    </div>
    <div class="coin-name">
        <text class="coin-short-name-price">BSC 0</text>
    </div>
    <text class="coin-info">Address: 0x1123cv...c0990123</text>
    <div class="coin-buttons">
        <div class="button">
            <div class="icon">I</div>
            <text class="text">Transfer</text>
        </div>
        <div class="button">
            <div class="icon">I</div>
            <text class="text">Swap</text>
        </div>
        <div class="button">
            <div class="icon">I</div>
            <text class="text">What is BSC</text>
        </div>
    </div>
  </div>
  <div class="program">Program</div>
  <div class="grafik">grafik</div>
</div>
</template>
<style scoped>
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50% 50%;
  height: 500px;
  border: 1px solid black;
  margin-top: 2vh;
  gap: 20px;
}


.coin-one{
  border: 1px solid black;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
}
.coin-two{
  border: 1px solid black;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
}
.coin-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .coin-icon-and-name{
        display: flex;
        flex-direction: row;
        .coin-icon{
            border-radius: 50%;
            background-color: gray;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
        }
        .coin-full-name{
            font-weight: bold;
        }
    }
    .coin-manage{
        color: darkcyan;
    }
}



.program{
  border: 1px solid black;
  grid-column: 3;
  grid-row: 1/3;
}
.grafik{
  border: 1px solid black;
  grid-column: 1/3;
  grid-row: 2;
}
</style>