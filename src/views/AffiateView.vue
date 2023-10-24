<template>
<div class="container">
    <div class="top-background"></div>
    <div class="top-with-gradient">
        <text class="title">title</text>
        <text class="description">description</text>
        <div class="bonus-partners">
            <div class="bonus">bonus</div>
            <div class="partners">partners</div>
        </div>
        <div class="upto">upto</div>
        <div class="yourteam">
            <div class="your">your</div>
            <div class="team">team</div>
        </div>
    </div>
</div>
</template>
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
    border: 1px solid black;
    display: grid;
    grid-template-columns: 30% 25% 10% 35%;
    grid-template-rows: 40% 40% 20%;
    .title{
        border: 1px solid black;
        grid-column: 1/3;
        grid-row: 1;
        display: flex;
        align-items: flex-end;
    }
    .description{
        display: flex;
        align-items: flex-start;
        border: 1px solid black;
        grid-column: 1/3;
        grid-row: 2;
    }
    .bonus-partners{
        border: 1px solid black;
        grid-column: 1/3;
        grid-row: 3;
        display: flex;
        align-items: center;
        .bonus{}
        .partners{}
    }
    .upto{
        border: 1px solid black;
        grid-column: 4;
        grid-row: 2;
        display: flex;
        align-items: flex-start;
    }
    .yourteam{
        border: 1px solid black;
        grid-column: 4;
        grid-row: 3;
        display: flex;
        align-items: center;
        .your{}
        .team{}
    }
}
</style>