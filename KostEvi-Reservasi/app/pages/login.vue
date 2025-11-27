'<template>
    <div>
        <div
            class="hero min-h-screen"
            style="background-image: url(/gambarKost1.jpg);"
        >
            <div class="hero-overlay"></div>
            <div class="hero-content text-neutral-content text-center">
                <div class="max-w-md">
                    <h1 class="mb-5 text-4xl font-bold">Login Admin Kost Evi</h1>
                    <p class="mb-5">
                        Silakan masuk ke akun Anda untuk melanjutkan.
                    </p>
                    <div class="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body text-black text-left">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Username</span>
                                </label>
                                <input type="text" placeholder="Username" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="Password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover font-bold">Lupa password?</a> 
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <a href="/dashboard">
                                    <button class="btn btn-neutral">Login</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>'