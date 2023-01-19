<template>
    <main class="bg-gray-900 h-full w-full py-32 font-poppins">
        <h1 class="text-white text-center text-3xl font-bold">Achievement</h1>
    
    <div class="grid grid-cols-1 gap-6 py-16 mx-6 sm:mx-32">
        <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-400">
        <thead class="text-xs 0 uppercase bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Title
                </th>
                <th scope="col" class="px-6 py-3">
                    Desc
                </th>
                <th scope="col" class="px-6 py-3">
                    Rewards
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in achievement" :key="i.id" class=" border-b bg-gray-800 border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                    {{ i.title }}
                </th>
                <td class="px-6 py-4">
                    {{ i.desc }}
                </td>
                <td class="px-6 py-4">      
                    {{ i.reward }}
                </td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
        
</main>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            achievement: [],
        }
    },
    created() {
        axios.get("https://ipz-jsonserver-dev.vercel.app/achievement").then((response) => {
        this.achievement = response.data;
    });  
    }
}
</script>