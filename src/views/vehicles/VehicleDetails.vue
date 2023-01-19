<template>
    <div class="bg-slate-900 font-poppins">
        <article v-if="vehicle" class="mx-[50vh] max-w-5xl tracking-wide px-6 xl:px-0 prose lg:prose-xl py-20">
            <p class="text-sm font-md text-white py-16 text-center"><router-link to="/vehicles" class="text-white text-center">← Back to Catalogue</router-link></p>
                <div class="container py-2 mx-auto lg:flex lg:h-128">
                    <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div class="max-w-lg">
                            <h1 class="text-xl font-bold tracking-wide text-white lg:text-3xl">{{ vehicle.title }}</h1>
                            <div class="mt-6">
                                <div
                                    class="inline-block px-4 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-full hover:bg-blue-400">
                                    {{ vehicle.price }} Rupiah</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2">
                        <img class="object-cover w-full max-w-2xl rounded-md lg:h-full"
                        :src="vehicle.img" :alt="vehicle.title">
                    </div>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data(){
        return {
            vehicle: null
        }
    },
    mounted(){
        fetch('https://ipz-jsonserver-dev.vercel.app/vehicles/' + this.$route.params.id)
            .then(res => res.json())
            .then(data => this.vehicle = data)
            .catch(err => console.log(err.message))
    }
}
</script>