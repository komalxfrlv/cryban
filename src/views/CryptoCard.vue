<template>
<div class="container">
    <div class="content">
        <div class="swap">
            <text class="title">Swap</text>
            <div class="transfer">
                <div class="fromto">
                    <text>From</text>
                    <div class="info">
                        <div class="left">
                            <div class="icon">I</div>
                            <div class="name">BSC</div>
                        </div>
                        <div class="right">
                            <input type="number" v-model="from" />
                            <text>=$0</text>
                        </div>
                    </div>
                    <text class="balance">balance: <text style="font-weight: bold;">0</text></text>
                </div>
                <div class="line"></div>
                <div class="fromto">
                    <text>To</text>
                    <div class="info">
                        <div class="left">
                            <div class="icon">I</div>
                            <div class="name">BCoin</div>
                        </div>
                        <div class="right">
                            <input type="number" v-model="to" disabled style="background-color: rgba(211, 211, 211, 0.288);" />
                            <text>=$0</text>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swap-button">
                <text>Swap</text>
            </div>
        </div>
        <div class="reach-your-goal">
            <div class="text">
                <text class="title">Reach tour financial goals faster</text>
                <text class="description">Two simple ways to greatly increace tour income in BCoin</text>
            </div>
            <div class="stakeearn" @click="$router.push({name: 'StakeEarn'})">
                <text>Stake&Earn</text>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            from: 1,
            to: 0,
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .swap{
        border: 1px solid var(--gray-color);
        border-radius: 1rem;
        width: 60%;
        padding: 16px;
        text-align: left;
        font-size: 1.3rem;
        font-weight: bold;
        .fromto{
            text{
                font-weight: bold;
                font-size: 1.1rem;
                color: var(--valuta-color);
            }
            .info{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .left{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .icon{
                        border-radius: 50%;
                        border: 1px solid var(--gray-color);
                        margin-right: 10px;
                        width: 30px;
                        height: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .name{
                        font-size: 1rem;
                    }
                }
                .right{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    position: relative;
                    input{
                        border: 1px solid var(--gray-color);
                        -webkit-appearance: none;
                        -moz-appearance: textfield;
                        border-radius: .4rem;
                        padding: 0px 8px;
                        outline: none;
                        // &:focus{
                        //     background-color: rgba(211, 211, 211, 0.288);
                        // }
                    }
                    text{
                        position: absolute;
                        top: 5px;
                        right: 5px;
                        color: var(--gray-color);
                    }
                }
            }
            .balance{
                font-weight: lighter;
            }
        }
        .line{
            background-color: var(--gray-color);
            height: 1px;
        }
        .swap-button{
            background-color: var(--link-active-text);
            color: white;
            padding: 8px;
            width: 30%;
            border-radius: .4rem;
            margin-top: 2vh;
            text-align: center;
            font-size: 1rem;
        }
    }
    .reach-your-goal{
        border: 0.5px solid var(--gray-color);
        border-radius: 1rem;
        width: 30%;
        padding: 16px;
        background: rgb(255,255,255);
        background: linear-gradient(142deg, rgba(255,255,255,1) 0%, rgba(106,174,170,1) 26%, rgba(9,121,106,0.8) 46%, rgba(0,255,143,1) 68%, rgba(1,214,20,1) 100%); 
        .text{
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-bottom: 4vh;
            .title{
                font-size: 2rem;
                font-weight: bold;
                color: white;
            }
            .description{
                font-size: 1.2rem;
                color: white;
            }
        }
        .stakeearn{
            background-color: white;
            border-radius: 8px;
            padding: 8px;
            color: var(--black-color);
            font-weight: bold;
            font-size: 1rem;
            cursor: pointer;
        }
    }
}
</style>