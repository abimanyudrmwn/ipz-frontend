<template>
    <main class="bg-gray-900 h-full w-full py-32 font-poppins">
        <div v-if="vehicle" class="text-white">
        <h1>{{ vehicle.title }}</h1>
        <p>The vehicle id is {{ vehicle.id }}</p>
        <p>{{ vehicle.details }}</p>
        </div>
        <div v-else>
            <p>Loading vehicle details.....</p>
        </div>
    </main>
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
        fetch('http://localhost:3000/vehicles/' + this.id)
            .then(res => res.json())
            .then(data => this.vehicle = data)
            .catch(err => console.log(err.message))
    }
}
</script>