<template>
    <div class="auth-page">
        <div class="auth-content">
            <div class="auth-content__text">
                <p class="f-15 w-700 color-white_05 uppercase mb-10"> Stake. Earn. Lifestyle. </p>
                <h1 class="f-40 f-x-36 w-500 grotesk color-white mb-10"> Open Crypto Banking </h1>
                <p class="f-16 w-600 color-white"> One super app, all things money </p>
            </div>
            <div class="auth-content__background auth-backround__login"></div>
        </div>
        <div class="auth-page__form">
            <div class="actual-form">
                <form class="ui-form login-form">
                    <div class="input-group mb-25 input-l"><label for="email"
                            class="label"><span>Email</span><!----></label>
                        <div class="input-holder"><input name="email" id="email" type="text"
                                placeholder="youremail@gmail.com" class="input"><!----></div><!---->
                    </div>
                    <div class="input-group input-group__password mb-10 input-l"><label for="password"
                            class="label"><span>Password</span><!----></label>
                        <div class="input-holder"><input name="password" id="password" type="password"
                                placeholder="Input here" class="input"><i class="icon-eye input-password"></i></div><!---->
                    </div>
                    <div class="flex j-end mb-40 fg-p"><a href="/forgot" class="f-14 w-600 underline color-blue51"> Forgot
                            password? </a></div><button class="button button-blue button-s w-100 mb-15" type="submit"> Log
                        In </button>
                    <div class="flex gap-4 j-center">
                        <button class="button-reg button-blue button-s w-100 mb-15" type="submit">Register</button>
                    </div><!---->
                </form>

                <form>

                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.auth-content {
    position: relative;
    height: 100%;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: right;
    text-align: right;
    /* background: url(/assets/bg-3835e597.png) no-repeat center center; */
    background-size: cover;
    overflow: hidden;
    background-color: #27315e;
    color: #F6F9FF;
}

.auth-page {
    position: relative;
    height: 100vh;
    min-height: 600px;
    display: grid;
    grid-template-columns: 38% 50%;
    background: #F6F9FF;
}

@media screen and (max-width: 1024px) {
    .auth-content {
        text-align: center;
        justify-content: center;
    }

    .auth-page {
        height: calc(100vh - 56px);
        grid-template-columns: 1fr;
        grid-template-rows: 360px 1fr;
        gap: 0;
    }

    .auth-page__form {
        justify-content: center !important;
    }
}

.actual-form {
    z-index: 999;
}


.auth-page__form {
    padding: 0 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    background: #F6F9FF;
}

.actual-form {
    max-width: 380px;
    width: 100%;
    padding: 25px 20px 30px;
    background: #FFFFFF;
    border: 1px solid #E2E2E2;
    border-radius: 20px;
}

.input {
    height: 50px;
    padding: 0 15px;
    border: 1px solid rgba(39, 49, 94, .1);
    font-weight: 100;
    font-size: 16px;
    color: #000;
    width: 100%;
    outline: none;
    border-radius: 10px;
    max-width: 330px;
}

.input-group {
    display: block;
    margin-bottom: 18px;
    margin-top: 6px;
}

.input-group.input-l .label {
    position: absolute;
    top: 0;
    left: 18px;
    transform: translateY(-50%);
    display: flex;
    gap: 2px;
    font-size: 15px;
    color: #27315e;
    z-index: 100;
    background-color: #FFFFFF;
    font-weight: 600;
    letter-spacing: 1px;
}

.fg-p {
    text-align: right;
    text-decoration: none;
}

.fg-p a {
    color: #3e4d8f;
    text-decoration: none;
}

.rg-n {
    color: #3e4d8f;
    text-decoration: none;
}

.button {
    margin-top: 18px;
    width: 100%;
    max-width: 362px;
    background: #5175D0;
    color: #fff;
    min-width: 135px;
    height: 40px;
    padding: 0 15px;
    border-radius: 5px;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid transparent;
    outline: none;
    font-size: 16px;
    font-weight: 800;
    text-transform: none;
    white-space: nowrap;
    transition: .25s ease-in-out;
    cursor: pointer;
}

.button-reg {
    margin-top: 12px;
    width: 100%;
    max-width: 362px;
    background: #fff;
    color: #5175D0;
    min-width: 135px;
    height: 40px;
    padding: 0 15px;
    border-radius: 5px;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid #5175D0;
    outline: none;
    font-size: 16px;
    font-weight: 800;
    text-transform: none;
    white-space: nowrap;
    transition: .25s ease-in-out;
    cursor: pointer;
}
</style>