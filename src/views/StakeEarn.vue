<template>
<div class="container">
    <div class="content">
        <div class="top-title">
            <div class="title">Stake & Earn</div>
            <div class="desc">BNCB Investment Strategies</div>
        </div>
        <div class="grid-blocks">
            <div class="coin-pool">
                <div class="pool-title">
                    <div class="earn">
                        <div class="coin-icon">I</div>
                        <div class="earn-title">BCoin Pools</div>
                        <div class="earn-desc">Earn BCoin through farming</div>
                    </div>
                    <div class="daily">
                        <text>1.2% daily</text>
                    </div>
                </div>
                <div class="currency">
                    <text>Select currency</text>
                    <div class="valut-blocks">
                        <div 
                            class="block" 
                            v-for="(b, index) in valuta" :key="b" 
                            @click="x = index"
                            :class="{ValutaSelect: x == index}"
                        >
                            <Icon :icon="b.icon" />
                            <text>{{ b.name }}</text>
                        </div>
                    </div>
                </div>
            </div>
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
<script>
import { Icon } from '@iconify/vue';
export default{
    components:{
        Icon
    },
    data(){
        return{
            x: 0,
            valuta:[
                {
                    icon: 'cib:btc',
                    name: 'BTC',
                    to500:{
                        dayproc: '0.25%',
                        mounthproc: '7.5%',
                        paproc: '91.25%'
                    },
                    to5000:{
                        dayproc: '0.3%',
                        mounthproc: '9%',
                        paproc: '109.5%'
                    },
                    over5000:{
                        dayproc: '0.4%',
                        mounthproc: '12%',
                        paproc: '146%'
                    }
                },
                {
                    icon: 'cryptocurrency:ltc',
                    name: 'LTC',
                    to500:{
                        dayproc: '0.35%',
                        mounthproc: '8.5%',
                        paproc: '101.25%'
                    },
                    to5000:{
                        dayproc: '0.4%',
                        mounthproc: '10%',
                        paproc: '110.5%'
                    },
                    over5000:{
                        dayproc: '0.44%',
                        mounthproc: '152%',
                        paproc: '1446%'
                    }
                },
                {
                    icon: 'formkit:bnb',
                    name: 'BNB',
                    to500:{
                        dayproc: '0.225%',
                        mounthproc: '7.55%',
                        paproc: '491.25%'
                    },
                    to5000:{
                        dayproc: '20.3%',
                        mounthproc: '29%',
                        paproc: '1059.5%'
                    },
                    over5000:{
                        dayproc: '50.4%',
                        mounthproc: '124%',
                        paproc: '1446%'
                    }
                },
                {
                    icon: 'cib:ethereum',
                    name: 'ETH',
                    to500:{
                        dayproc: '0.254%',
                        mounthproc: '7.52%',
                        paproc: '91.245%'
                    },
                    to5000:{
                        dayproc: '0.35%',
                        mounthproc: '92%',
                        paproc: '1509.5%'
                    },
                    over5000:{
                        dayproc: '0.44%',
                        mounthproc: '122%',
                        paproc: '1456%'
                    }
                },
                {
                    icon: 'cryptocurrency:trx',
                    name: 'TRX',
                    to500:{
                        dayproc: '0.225%',
                        mounthproc: '7.55%',
                        paproc: '91.225%'
                    },
                    to5000:{
                        dayproc: '0.35%',
                        mounthproc: '92%',
                        paproc: '109.52%'
                    },
                    over5000:{
                        dayproc: '0.45%',
                        mounthproc: '152%',
                        paproc: '1246%'
                    }
                },
                {
                    icon: 'formkit:tether',
                    name: 'Tether',
                    to500:{
                        dayproc: '0.255%',
                        mounthproc: '7.25%',
                        paproc: '91.225%'
                    },
                    to5000:{
                        dayproc: '0.35%',
                        mounthproc: '95%',
                        paproc: '109.54%'
                    },
                    over5000:{
                        dayproc: '0.42%',
                        mounthproc: '142%',
                        paproc: '1465%'
                    }
                },
                {
                    icon: 'mingcute:xrp-fill',
                    name: 'XRP',
                    to500:{
                        dayproc: '0.255%',
                        mounthproc: '7.52%',
                        paproc: '91.255%'
                    },
                    to5000:{
                        dayproc: '0.35%',
                        mounthproc: '92%',
                        paproc: '109.55%'
                    },
                    over5000:{
                        dayproc: '0.45%',
                        mounthproc: '122%',
                        paproc: '1456%'
                    }
                },

            ]
        }
    }
}
</script>
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
    margin-top: 5vh;
    gap: 10px;
    .coin-pool{
        
        grid-column: 1;
        grid-row: 1/4;
        .pool-title{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .earn{
                display: grid;
                grid-template-columns: 20% 100%;
                grid-template-rows: 50% 50%;
                text-align: left;
                .coin-icon{
                    grid-column: 1;
                    grid-row: 1/3;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid black;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                }
                .earn-title{
                    grid-column: 2;
                    grid-row: 1;
                    font-weight: bold;
                    color: var(--black-color);
                }
                .earn-desc{
                    grid-column: 2;
                    grid-row: 2;
                    color: var(--gray-color);
                }
            }
            .daily{
                background-color: var(--valuta-color);
                color: white;
                padding: 2px 8px;
                display: flex;
                align-items: center;
                border-radius: 8px;
                height: 50%;
                font-weight: bold;
            }
        }
        .currency{
            .ValutaSelected{
                background-color: var(--valuta-color);
                color: white !important;
                .valute{color: white !important;}
            }
        }
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