<template>
<div class="container">
    <div class="content">
        <div class="top-title">
            <div class="title">Stake & Earn</div>
            <div class="desc">BNCB Investment Strategies</div>
        </div>
        <div class="grid-blocks">
            <div class="coin-pool">
                <!--COIN TITLE-->
                <div class="pool-title">
                    <div class="earn">
                        <div class="coin-icon">I</div>
                        <div class="earn-title">BCoin Pools</div>
                        <div class="earn-desc">Earn BCoin through farming</div>
                    </div>
                    <div class="daily">
                        <text>{{valuta[x].dailyProcent}}% daily</text>
                    </div>
                </div>
                <!--CURRENCY-->
                <div class="currency">
                    <text class="currency-title">Select currency</text>
                    <div class="valut-blocks">
                        <div 
                            class="block" 
                            v-for="(b, index) in valuta" :key="b" 
                            @click="x = index"
                            :class="{ValutaSelect: x == index}"
                        >
                            <Icon class="b-icon" :icon="b.icon" />
                            <text class="valute">{{ b.name }}</text>
                        </div>
                    </div>
                </div>
                <!--PERIOD-->
                <div class="period">
                    <text class="period-title">Select period</text>
                    <div class="days">
                        <div 
                            v-for="(day, index) in days" :key="day" 
                            class="day" 
                            @click="y=index"
                            :class="{choosePeriod: y == index}"
                        >
                            <text>{{day.day}} days</text>
                        </div>
                    </div>
                </div>
                <!--AMOUNT-->
                <div class="amount">
                    <text class="amount-title">Amount to stake <text style="color: var(--gray-color)">(min. 100$)</text></text>
                    <input type="number" min="100" v-model="amount" />
                </div>
                <!--INCOME-->
                <div class="income">
                    <div class="result-income">
                        <text>Daily income</text>
                        <text class="stake-coin">{{valuta[x].dailyProcent}} BCoin</text>
                    </div>
                    <div class="result-income">
                        <text>Total income</text>
                        <text class="stake-coin">{{ (amount + ((amount % valuta[x].dailyProcent) * days[y].day)).toFixed(0) }} BCoin</text>
                    </div>
                </div>
                <div class="stake-now-button">
                    <text>Stake now</text>
                </div>
            </div>
            <!-- <div class="transaction">
                <text>Transaction</text>
                <div class="transaction-grafik">grafik</div>
            </div> -->
            <div class="coin-value">
                <div class="coin-icon">I</div>
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
                <div class="coin-icon">I</div>
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
            y: 2,
            amount: 100,
            valuta:[
                {
                    icon: 'cib:btc',
                    name: 'BTC',
                    dailyProcent: 1.2
                },
                {
                    icon: 'cryptocurrency:ltc',
                    name: 'LTC',
                    dailyProcent: 1.1
                },
                {
                    icon: 'formkit:bnb',
                    name: 'BNB',
                    dailyProcent: 1.4
                },
                {
                    icon: 'cib:ethereum',
                    name: 'ETH',
                    dailyProcent: 0.8
                },
                {
                    icon: 'cryptocurrency:trx',
                    name: 'TRX',
                    dailyProcent: 0.6
                },
                {
                    icon: 'formkit:tether',
                    name: 'Tether',
                    dailyProcent: 1.3
                },
                {
                    icon: 'mingcute:xrp-fill',
                    name: 'XRP',
                    dailyProcent: 0.9
                },

            ],
            days:[
                {
                    day: 30
                },
                {
                    day: 60
                },
                {
                    day: 90
                },
                {
                    day: 120
                }
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
    grid-template-rows: 25% 25% 1fr;
    margin-top: 5vh;
    gap: 10px;
    .coin-pool{
        border: 1px solid var(--gray-color);
        border-radius: 1.2rem;
        padding: 16px;
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
            text-align: left;
            margin-top: 1.5vh;
            .currency-title{
                font-size: 1rem;
                color: var(--gray-color);
                font-weight: bold;
            }
            .valut-blocks{
                margin-top: .5vh;
                .ValutaSelect{
                    background-color: var(--valuta-color);
                    color: white !important;
                    .valute{color: white !important;}
                }
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                .block{
                    cursor: pointer;
                    border: 1px solid var(--gray-color);
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 8px;
                    border-radius: 6px;
                    width: 74px;
                    height: 74px;
                    .b-icon{
                        font-size: 3rem;
                    }
                    .valute{
                        font-size: 12px;
                        margin-top: 1vh;
                        font-weight: bold;
                    }
                }
            }
        }
        .period{
            text-align: left;
            margin-top: 3vh;
            .period-title{
                font-size: 1rem;
                color: var(--gray-color);
                font-weight: bold;
            }
            .days{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin-top: 1vh;
                .choosePeriod{
                    background-color: var(--valuta-color);
                    text{
                        color: white;
                    }
                }
                .day{
                    cursor: pointer;
                    border: 1px solid var(--gray-color);
                    width: 20%;
                    border-radius: 6px;
                    text-align: center;
                    padding: 4px;
                    text{
                        font-size: 1rem;
                        font-weight: bold;
                    }
                }
            }
        }
        .amount{
            margin-top: 4vh;
            text-align: left;
            display: flex;
            flex-direction: column;
            position: relative;
            .amount-title{
                position: absolute;
                background-color: white;
                top: -10px;
                left: 10px;
                font-size: 1rem;
                color: var(--valuta-color);
                font-weight: bold;
            }
            input{
                -webkit-appearance: none;
                -moz-appearance: textfield;
                border: 1px solid var(--gray-color);
                padding: 16px;
                border-radius: 8px;
                outline: none;
                font-size: 1.2rem;
                font-weight: 500;
            }
        }
        .income{
            margin-top: 3vh;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .result-income{
                background-color: #dde1f180;
                padding: 8px;
                border-radius: 6px;
                width: 45%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                font-weight: bold;
                text{
                    color: var(--gray-color);
                }
                .stake-coin{
                    color: var(--valuta-color);
                }
            }
        }
        .stake-now-button{
            margin-top: 2vh;
            color: white;
            background-color: var(--link-active-text);
            padding: 8px;
            width: 45%;
            font-weight: bold;
            border-radius: 6px;
            cursor: pointer;
            &:hover{
                background-color: var(--link-hover-text);
            }
        }
    }
    // .transaction{
    //     border: 1px solid black;
    //     grid-column: 2;
    //     grid-row: 1;
    // }
    .coin-value{
        border: 1px solid var(--gray-color);
        grid-column: 2;
        grid-row: 1;
        border-radius: 1rem;
        display: grid;
        text-align: left;
        grid-template-columns: 15% 85%;
        grid-template-rows: 40% 60%;
        padding: 16px;
        font-size: 1rem;
        font-weight: bold;
        .coin-icon{
            grid-column: 1;
            grid-row: 1/3;
            border: 1px solid var(--gray-color);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .coin-name{
            grid-column: 2;
            grid-row: 1;
            display: flex;
            justify-content: space-between;
            color: var(--valuta-color);
        }
        .coin-desc{
            grid-column: 2;
            grid-row: 2;
            color: var(--gray-color);
            margin-top: 1vh;
            .available{
                display: flex;
                justify-content: space-between;
            }
            .staked{
                display: flex;
                justify-content: space-between;
            }
        }
    }
    .coin-bank{
        border: 1px solid var(--gray-color);
        grid-column: 2;
        grid-row: 2;
        border-radius: 1rem;
        display: grid;
        text-align: left;
        grid-template-columns: 15% 85%;
        grid-template-rows: 40% 60%;
        padding: 16px;
        font-size: 1rem;
        font-weight: bold;
        .coin-icon{
            grid-column: 1;
            grid-row: 1/3;
            border: 1px solid var(--gray-color);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .coin-name{
            grid-column: 2;
            grid-row: 1;
            display: flex;
            justify-content: space-between;
            color: var(--valuta-color);
        }
        .coin-desc{
            grid-column: 2;
            grid-row: 2;
            display: flex;
            justify-content: space-between;
            color: var(--gray-color);
            margin-top: 1vh;
        }
    }
}
</style>