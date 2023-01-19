<template>
    <div class="bg-gray-900 py-10">
    <div class="mx-auto max-w-5xl tracking-wide px-4 xl:px-0">
        <h1 class="font-sora text-2xl text-white">Vehicles Catalogue</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
      <div v-for="vehicle in vehicles" :key="vehicle.id" class="border border-gray-700 rounded-xl shadow-lg">
            <div class="overflow-hidden rounded-xl" style="background-color:#f9f1f9">
              <a :href="`/vehicles/${vehicle.id}`">
                <img alt="vehicles Image" class="lazyLoad isLoaded object-fill h-96 w-120" src="https://via.placeholder.com/1100x500">
              </a>
            </div>
            <div class="p-3 pr-2"><div class="h-2"></div> 
            <h2 class="font-sora text-2xl font-bold text-white">
              <a :href="`/vehicles/${vehicle.id}`">
                {{ vehicle.title }}
              </a>
            </h2> 
                <div class="h-1"></div>
                <p class="font-sora text-md font-light text-gray-200 leading-5">Specifications :</p>
                <ul class="flex justify-between text-white pr-2">
                    <li class="underline">
                        Type
                    </li>
                    <li class="font-bold">
                        Lorem ipsum
                    </li>
                </ul>
                <ul class="flex justify-between text-white pr-2">
                    <li class="underline">
                        HP
                    </li>
                    <li class="font-bold">
                        Lorem ipsum
                    </li>
                </ul>
                <ul class="flex justify-between text-white pr-2">
                    <li class="underline">
                        Seating
                    </li>
                    <li class="font-bold">
                        Lorem ipsum
                    </li>
                </ul>
            <div class="h-6">
            </div> 
            <div class="flex justify-between items-end">
              <span class="bg-green-600 text-white px-4 py-2 rounded-full text-md font-bold">{{ vehicles.price }}</span> 
              <a class="hover:bg-gray-100 hover:text-gray-900 text-white px-4 py-2 rounded-full font-bold" :href="`/vehicles/${vehicle.id}`">🔐 Top Secret →&#xFEFF;</a>
            </div>
          </div>
        </div>
        </div>  
        <div class="h-16"></div>
      </div>
  </div>
  </template>

<script>
export default {
    data(){
        return{
            vehicles: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/vehicles')
        .then(res => res.json())
        .then(data => this.vehicles = data)
        .catch(err => console.log (err.message))
    }
}
</script>