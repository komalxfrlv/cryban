<template>
<div class="container">
    <div class="content">
        <div class="top-title">
            <div class="title">Stake & Earn</div>
            <div class="desc">BNCB Investment Strategies</div>
        </div>
        <div class="grid-blocks">
            <div class="coin-pool">coin pool</div>
            <div class="transaction">
                <text>Transaction</text>
                <div class="transaction-grafik">grafik</div>
            </div>
            <div class="coin-value">
                <div class="coin-icon">ICON</div>
                <div class="coin-name">
                    <text>BCoin</text>
                    <text>0.35 BCoin</text>
                </div>
                <div class="coin-desc">
                    <div class="available">
                        <text>Available</text>
                        <text>0.35 BCoin</text>
                    </div>
                    <div class="staked">
                        <text>Staked</text>
                        <text>0 BCoin</text>
                    </div>
                </div>
            </div>
            <div class="coin-bank">
                <div class="coin-icon">ICON</div>
                <div class="coin-name">
                    <text>Bank Supra Coin</text>
                    <text>0 BSC</text>
                </div>
                <div class="coin-desc">
                    <text>1 BSC = 1.239537 BCoin</text>
                    <text>=0 BCoin</text>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.container{
    width: 100vw;
}
.content{
    margin-top: var(--main-container-top-spacing);
    width: var(--main-content-width);
    margin-left: auto;
    margin-right: auto;
}
.top-title{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    .title{
        font-size: 32px;
        font-weight: bold;
    }
    .desc{
        font-size: 1rem;
    }
}
.grid-blocks{
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 50% 25% 25%;
    border: 1px solid black;
    .coin-pool{
        border: 1px solid black;
        grid-column: 1;
        grid-row: 1/4;
    }
    .transaction{
        border: 1px solid black;
        grid-column: 2;
        grid-row: 1;
    }
    .coin-value{
        border: 1px solid black;
        grid-column: 2;
        grid-row: 2;
    }
    .coin-bank{
        border: 1px solid black;
        grid-column: 2;
        grid-row: 3;
    }
}
</style>