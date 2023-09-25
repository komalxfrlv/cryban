<template>
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
    <text class="coin-info"></text>
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
        <text class="coin-translate-to-coin">BCoin 0.00</text>
    </div>
    <div class="coin-info">
        <text class="info">Address:&nbsp;<text class="copied-number">0xfc532ce6d9cf192e2f56bf6781bc3f84e5bb0d8d</text></text>
        <text class="copy">Copy</text>
    </div>
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
  <div class="program">
    <text class="program-title">Multi-Type Affiliate Program</text>
    <div class="program-steps">
        <text class="step">Invite your friends</text>
        <text class="step">Earn up to 25% from your partner’s profit on Saving Vaults, Farms and Stake</text>
        <text class="step">A 5 level affiliate program</text>
    </div>
    <div class="program-button">
        <text>Invite now</text>
    </div>
  </div>
  <div class="grafik">
    <div class="grafik-info">
        <div class="coin-view">
            <div class="icon-coin">I</div>
            <text class="name">BSC</text>
        </div>
        <div class="coin-statistic">
            <div class="statistic">
                <text class="price">$1,870,725.91</text>
                <text class="price-desc">BSC value</text>
            </div>
            <div class="statistic">
                <text class="price">$1.239537</text>
                <text class="price-desc">Price</text>
            </div>
            <div class="statistic">
                <text class="price-profit">+1139.54% </text>
                <text class="price-desc">Profit per selected period </text>
            </div>
        </div>
    </div>
    <div class="sam-grafik">
        SAM GRAFIK
    </div>
    <div class="grafik-footer">
        <div class="some-info">
            <text class="valute">0 BSC</text>
            <text>Amount to be withdrawn</text>
        </div>
        <div class="extract-button">
            <text>Extract</text>
        </div>
    </div>
  </div>
</div>
</template>
<style scoped lang="scss">
.cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50% 50%;
  height: 500px;
  margin-top: 2vh;
  gap: 20px;
}


/*COIN VIEW*/

.coin-one{
  box-shadow: 0px 0px 1px 1px rgb(177, 177, 177);
  border-radius: 1.2rem;
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
}
.coin-two{
  box-shadow: 0px 0px 1px 1px rgb(177, 177, 177);
  border-radius: 1.2rem;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
}
.coin-title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .coin-icon-and-name{
        display: flex;
        flex-direction: row;
        align-items: center;
        .coin-icon{
            border-radius: 50%;
            background-color: gray;
            width: 40px;
            height: 40px;
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
        color: var(--link-active-text);
        &:hover{
            color: var(--link-hover-text);
            cursor: pointer;
        }
    }
}
.coin-name{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    .coin-short-name-price{
        font-size: 22px;
        font-weight: bold;
    }
    .coin-translate-to-coin{
        font-size: 1rem;
        margin-left: 10px;
    }
}
.coin-info{
    display: flex;
    justify-content: space-between;
    .info{
        font-size: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: left;
        .copied-number{
            width: 30%;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .copy{
        color: var(--link-active-text);
        &:hover{
            color: var(--link-hover-text);
            cursor: pointer;
        }
    }
}
.coin-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    .button{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover{
            color: var(--link-active-text);
        }
        .icon{
            border: 1px solid rgb(235, 235, 235);
            background-color: white;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            padding: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .text{
            font-size: 1rem;
            font-weight: 600;
            margin-top: 0.5vh;
        }
    }
}
/*---------*/


/*LOYALITY PROGRAM*/
.program{
    grid-column: 3;
    grid-row: 1/3;
    border-radius: 1.2rem;
    padding: 16px;
    text-align: left;
    background: rgb(255,255,255);
    background: linear-gradient(142deg, rgba(255,255,255,1) 0%, rgba(106,174,170,1) 26%, rgba(9,121,106,0.8) 46%, rgba(0,255,143,1) 68%, rgba(1,214,20,1) 100%); 
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  .program-title{
    font-size: 32px;
    font-weight: bold;
    color: white;
  }
  .program-steps{
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    .step{
        border: 1px solid rgba(255, 255, 255, 0.486);
        // background-color: rgba(255, 255, 255, 0.486);
        backdrop-filter: blur(5px);
        padding: 4px 8px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: left;
        color: rgb(255, 255, 255);
    }
  }
  .program-button{
    background-color: white;
    padding: 8px 16px;
    border-radius: 6px;
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    &:hover{
        background-color: var(--link-active-text);
        color: white;
        cursor: pointer;
    }
  }
}
/*----------------*/


.grafik{
    box-shadow: 0px 0px 1px 1px rgb(177, 177, 177);
    border-radius: 1.2rem;
    padding: 8px;
    grid-column: 1/3;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .grafik-info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .coin-view{
            display: flex;
            flex-direction: row;
            align-items: center;
            .icon-coin{
                width: 35px;
                height: 35px;
                border: 1px solid rgb(235, 235, 235);
                background-color: white;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 5px;
            }
            .name{
                font-size: 1.6rem;
            }
        }
        .coin-statistic{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 100%;
            .statistic{
                display: flex;
                flex-direction: column;
                .price{
                    font-weight: bold;
                    color: var(--black-color);
                }
                .price-profit{
                    font-weight: bold;
                    color: var(--link-active-text);
                }
                .price-desc{
                    color: var(--gray-color);
                }
            }
        }
    }
    .grafik-footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .some-info{
            .valute{
                font-size: 1.6rem;
                font-weight: bold;
                margin-right: 10px;
                color: var(--black-color)
            }
            text{
                color: var(--gray-color);
                font-weight: bold;
            }
        }
        .extract-button{
            border-radius: 6px;
            border: 1px solid var(--link-active-text);
            color: var(--link-active-text);
            font-weight: bold;
            padding: 8px 32px;
            &:hover{
                background-color: var(--link-active-text);
                color: white;
                cursor: pointer;
            }
        }
    }
}
</style>