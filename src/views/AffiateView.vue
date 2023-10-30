<template>
<div class="container">
    <div class="top-background"></div>
    <div class="top-with-gradient">
        <text class="title">First crypto banking ecosystem with a three-type bonus program</text>
        <text class="description">Our affiliate program encourages the joint use of the ecosystem by the community with the aim of helping out products. Supported by the community: become massive and global, white earning. As the nore tou use the ecosystem resources, the more you earn.</text>
        <div class="bonus-partners">
            <div class="direct-active">
                <div class="icon">I</div>
                <div class="inside-card">
                    <div class="top">Direct and Linear bonus</div>
                    <div class="bottom">25% / 10% / 5% / 5% / 5%</div>
                </div>
            </div>
            <div class="direct-active">
                <div class="icon">I</div>
                <div class="inside-card">
                    <div class="top">Active / Total partners</div>
                    <div class="bottom">0 / 0</div>
                </div>
            </div>
        </div>
        <div class="upto">
            <div class="upto-card">
                <text class="upto-top">Up to 25%</text>
                <text class="upto-bottom">in BCoin from freinds earnings</text>
            </div>
        </div>
        <div class="yourteam">
            <div class="youteam-card">
                <div class="youteam-icon">I</div>
                <div class="your">
                    <text class="your-title">Your commission</text>
                    <text class="your-desc">BCoin 0</text>
                </div>
                <div class="your">
                    <text class="your-title">Team turnover</text>
                    <text class="your-desc">BCoin 0</text>
                </div>
            </div>
        </div>
    </div>
    <div class="cards">
        <div class="upline">
            <div class="your-upline">
                <text class="gray-text">Your Upline: </text>
                <text class="black-blue-text">No inviter</text>
            </div>
            <text class="gray-text" style="margin-top: 10px;">Your referral link: </text>
            <div class="inputs">
                <input type="text" v-model="link" disabled ref="link" />
                <text @click="copyText()">Cp</text>
            </div>
        </div>
        <div class="network-turnover">
            <div class="block">
                <text class="black-blue-text">Network</text>
                <text class="black-blue-text">0 Partners</text>
            </div>
            <div class="levels" v-for="i in 5" :key="i" :class="{GrayBack: i == 1 || i == 3 || i == 5}">
                <text class="gray-text">{{ i }} LvL</text>
                <text class="black-blue-text">0</text>
            </div>
        </div>
        <div class="network-turnover">
            <div class="block">
                <text class="black-blue-text">Turnover</text>
                <text class="black-blue-text">0 BCoin</text>
            </div>
            <div class="levels" v-for="i in 5" :key="i" :class="{GrayBack: i == 1 || i == 3 || i == 5}">
                <text class="gray-text">{{ i }} LvL</text>
                <text class="black-blue-text">0</text>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default{
    data(){
        return{
            link: 'https://balu.e[xample].com',
        }
    },
    methods:{
        copyText() {
            navigator.clipboard.writeText(this.link);
        }
    }
}
</script>
<style scoped lang="scss">
.container{
    width: 100vw;
}
.top-background{
    height: 400px;
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 2;
    background: rgb(255,255,255);
    background: linear-gradient(142deg, rgba(255,255,255,1) 0%, rgba(106,174,170,1) 26%, rgba(9,121,106,0.8) 46%, rgba(0,255,143,1) 68%, rgba(1,214,20,1) 100%); 
}
.top-with-gradient{
    position: relative;
    z-index: 3;
    height: 400px;
    display: grid;
    grid-template-columns: 30% 25% 10% 35%;
    grid-template-rows: 40% 40% 20%;
    .title{
        grid-column: 1/3;
        grid-row: 1;
        display: flex;
        align-items: flex-end;
        font-size: 2rem;
        font-weight: bold;
        color: white;
        text-align: left;
    }
    .description{
        display: flex;
        align-items: flex-start;
        grid-column: 1/3;
        grid-row: 2;
        color: white;
        font-size: 1.1rem;
        text-align: left;
    }
    .bonus-partners{
        grid-column: 1/3;
        grid-row: 3;
        display: flex;
        align-items: center;
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .direct-active{
            width: 48%;
            backdrop-filter: blur(50px);
            padding: 8px;
            border-radius: 8px;
            background-color: rgba(83, 96, 131, 0.274);
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            .icon{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .inside-card{
                display: flex;
                flex-direction: column;
                justify-content: left;
                text-align: left;
                .top{
                    color: rgba(255, 255, 255, 0.301);
                }
                .bottom{
                    color: white;
                    font-weight: bold;
                }
            }
        }
    }
    .upto{
        grid-column: 4;
        grid-row: 2;
        display: flex;
        align-items: flex-start;
        .upto-card{
            width: 100%;
            padding: 8px;
            display: flex;
            flex-direction: column;
            text-align: left;
            border-radius: 8px;
            border: 1px solid var(--gray-color);
            backdrop-filter: blur(50px);
            background-color: rgba(83, 96, 131, 0.274);
            .upto-top{
                font-size: 2rem;
                color: white;
                font-weight: bold;
            }
            .upto-bottom{
                color: white;
            }
        }
    }
    .yourteam{
        grid-column: 4;
        grid-row: 3;
        display: flex;
        align-items: center;
        .youteam-card{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 8px;
            width: 100%;
            border-radius: 8px;
            backdrop-filter: blur(50px);
            background-color: rgba(83, 96, 131, 0.274);
            .youteam-icon{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .your{
                display: flex;
                flex-direction: column;
                text-align: left;
                .your-title{
                    color: rgba(255, 255, 255, 0.473);
                }
                .your-desc{
                    color: white;
                    font-weight: bold;
                }
            }
        }
    }
}
.cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1;
    margin-top: 5vh;
    gap: 20px;
    .black-blue-text{
        color: var(--valuta-color);
        font-weight: bold;
    }
    .gray-text{
        color: var(--gray-color);
        font-weight: bold;
    }
    .upline{
        border: 1px solid var(--gray-color);
        border-radius: 8px;
        padding: 8px;
        display: flex;
        flex-direction: column;
        text-align: left;
        .your-upline{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .inputs{
            position: relative;
            input{
                border: none;
                background-color: rgba(128, 128, 128, 0.199);
                padding: 4px;
                border-radius: 6px;
                color: var(--valuta-color);
                font-weight: bold;
                width: 100%;
            }
            text{
                position: absolute;
                top: 50%;
                right: 10px;
                transform: translate(0, -50%);
                color: gray;
                &:hover{
                    color: rgb(175, 174, 174);
                    cursor: pointer;
                }
            }
        }
    }
    .network-turnover{
        border: 1px solid var(--gray-color);
        border-radius: 8px;
        padding: 8px;
        .block{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .levels{
            padding: 4px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .GrayBack{
            background-color: rgba(128, 128, 128, 0.199);
            border-radius: 6px;
        }
    }
}
</style>