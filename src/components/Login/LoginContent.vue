<template>
    <div class="login-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="login-image">
                        <img src="../../assets/images/login-form.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="login-form">
                        <h2>Login</h2>

                        <form>
                            <div class="form-group">
                                <label>Username or email</label>
                                <input type="text" class="form-control" placeholder="Username or email">
                            </div>

                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" placeholder="Password">
                            </div>

                            <div class="row align-items-center">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="checkme">
                                        <label class="form-check-label" for="checkme">Remember me</label>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6 col-sm-6 lost-your-password">
                                    <a href="#" class="lost-your-password">Lost your password?</a>
                                </div>
                            </div>

                            <button type="submit" class="default-btn">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LoginContent',
}
</script>