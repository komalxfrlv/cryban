<template>
<div class="container">
    <div class="content">
        <div class="saving-vaults">
            <div class="top-title-and-picture">
                <div class="top-title">
                    <div class="icon"><Icon icon="bi:safe" /></div>
                    <text class="top-big-text">Saving Vaults</text>
                    <text class="top-description">Maximise your money. Grow your money every day with Savings Vaults. No lock-up period.</text>
                </div>
                <div class="top-picture">
                    PICTURE
                </div>
            </div>
        </div>
        <div class="select-currency">
            <text class="currency-title">Select currency</text>
            <div class="pre-valuta">
                <div 
                    class="valuta" 
                    v-for="(val, index) in valuta" 
                    :key="val" 
                    @click="x = index"
                    :class="{ValutaSelected: x == index}"
                >
                    <Icon class="ikonka" :icon="val.icon" />
                    <text class="valute">{{ val.name }}</text>
                </div>
            </div>
        </div>
        <div class="currency-selected">
            <div class="table">
                <div class="table-header">
                    <text style="color: gray">Saving from</text>
                    <text style="font-weight: bold;">$1 to $499</text>
                </div>
                <div class="day-mounth-pa">
                    <div class="dmp-option">{{ valuta[x].to500.dayproc }} per day</div>
                    <div class="dmp-option">{{ valuta[x].to500.mounthproc }} per mounth</div>
                    <div class="dmp-option">{{ valuta[x].to500.paproc }} p.a.</div>
                </div>
                <div class="table-select-button">Select</div>
            </div>
            <div class="table">
                <div class="table-header">
                    <text style="color: gray">Saving from</text>
                    <text style="font-weight: bold;">$500 to $4999</text>
                </div>
                <div class="day-mounth-pa">
                    <div class="dmp-option">{{ valuta[x].to5000.dayproc }} per day</div>
                    <div class="dmp-option">{{ valuta[x].to5000.mounthproc }} per mounth</div>
                    <div class="dmp-option">{{ valuta[x].to5000.paproc }} p.a.</div>
                </div>
                <div class="table-select-button">Select</div>
            </div>
            <div class="table">
                <div class="table-header">
                    <text style="color: gray">Saving from</text>
                    <text style="font-weight: bold;">$5000</text>
                </div>
                <div class="day-mounth-pa">
                    <div class="dmp-option">{{ valuta[x].over5000.dayproc }} per day</div>
                    <div class="dmp-option">{{ valuta[x].over5000.mounthproc }} per mounth</div>
                    <div class="dmp-option">{{ valuta[x].over5000.paproc }} p.a.</div>
                </div>
                <div class="table-select-button">Select</div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { Icon } from '@iconify/vue';
export default{
    components: {
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
.saving-vaults{
    .top-title-and-picture{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .top-title{
            width: 40%;
            display: grid;
            grid-template-columns: 15% 85%;
            grid-template-rows: 50% 50%;
            text-align: left;
            .icon{
                grid-column: 1;
                grid-row: 1;
                font-size: 36px;
            }
            .top-big-text{
                grid-column: 2;
                grid-row: 1;
                font-size: 32px;
                font-weight: bold;
                display: flex;
                align-items: flex-end;
            }
            .top-description{
                grid-column: 2;
                grid-row: 2;
                display: flex;
                align-items: flex-start;
                font-size: .9rem;
            }

        }
    }
}
.select-currency{
    margin-top: 10vh;
    margin-bottom: 5vh;
    .currency-title{
        font-weight: bold;
        font-size: 26px;
    }
    .pre-valuta{
        width: 100%;
        display: flex; 
        flex-direction: row; 
        justify-content: space-between;
        margin-top: 1vh;
        .ValutaSelected{
            background-color: var(--valuta-color);
            color: white !important;
            .valute{color: white !important;}
        }

        .valuta{
            padding-top: 32px;
            padding-bottom: 32px;
            border: 1px solid rgb(78, 78, 78);
            border-radius: 1rem;
            // border: 1px solid black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 10%;
            cursor: pointer;
            .ikonka{
                font-size: 38px;
                margin-bottom: 1vh;
                color: var(--link-active-text)
            }
            .valute{
                font-weight: bold;
                color: var(--black-color);
            }
        }
    }

}
.currency-selected{
    border-top: 1.5px solid rgba(128, 128, 128, 0.514);
    padding-top: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: white;
    .table{
        border: 1px solid black;
        border-radius: 1.2rem;
        width: 32%;
        padding: 1%;
        background-color: var(--valuta-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .table-header{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .day-mounth-pa{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 1vh;
            margin-bottom: 2vh;
            .dmp-option{
                border-radius: 9px;
                padding: 3px;
                background-color: rgba(255, 255, 255, 0.137);
                width: 30%;
                font-size: 12px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        }
        .table-select-button{
            font-weight: bold;
            border: 1px solid white;
            border-radius: 5px;
            padding: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
}
</style>