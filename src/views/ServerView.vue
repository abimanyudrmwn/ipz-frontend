<template>
  <main class="bg-hitam h-full w-full py-32 font-poppins">
      <h1 class="text-putih text-center text-3xl font-bold">Server Status</h1>
    
      <div class="grid grid-cols-1 gap-6 py-16 mx-6 sm:grid-cols-2 sm:mx-12">
        <div v-for="i in info" :key="i.maxPlayers" class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-putih">
              <tbody>
                  <tr class="bg-abutuabanget bg-opacity-40 border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-putih">
                          Server Name
                      </th>
                      <td class="px-6 py-4">
                          {{i.serverName}}
                      </td>
                  </tr>
                  <tr class="bg-abutuabanget bg-opacity-40 border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-putih">
                          IP
                      </th>
                      <td class="px-6 py-4">
                          {{i.ip}}
                      </td>
                  </tr> 
                  <tr class="bg-abutuabanget bg-opacity-40 border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-putih">
                          Port
                      </th>
                      <td class="px-6 py-4">
                          {{i.port}}
                      </td>
                  </tr> 
                  <tr class="bg-abutuabanget bg-opacity-40 border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-putih">
                          Status
                      </th>
                      <td class="px-6 py-4 text-green-600 animate-pulse">
                          {{i.serverStatus}}
                      </td>
                  </tr> 
                  <tr class="bg-abutuabanget bg-opacity-40 border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-putih">
                          In-Game Time
                      </th>
                      <td class="px-6 py-4">
                          {{i.clock}}
                      </td>
                  </tr>
                  <tr class="bg-abutuabanget bg-opacity-40 border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-putih">
                          Players
                      </th>
                      <td class="px-6 py-4">
                          {{i.playerCount}}/{{i.maxPlayers}}
                      </td>
                  </tr>
                  <tr class="bg-abutuabanget bg-opacity-40 border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-putih">
                          Season Age
                      </th>
                      <td class="px-6 py-4">
                          {{i.seasonAge}}
                      </td>
                  </tr>
                  <tr class="bg-abutuabanget bg-opacity-40 border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-putih">
                          Version
                      </th>
                      <td class="px-6 py-4">
                          {{i.version}}
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-putih">
        <thead class="text-xs 0 uppercase bg-abutua bg-opacity-40 text-putih">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Player Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Zombie Killed
                </th>
                <th scope="col" class="px-6 py-3">
                    Survived Time
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="s in player" :key="s.nickname" class=" border-b bg-abutuabanget bg-opacity-40 border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-putih">
                    {{ s.nickname }}
                </th>
                <td class="px-6 py-4">
                    {{ s.zombieKill }}
                </td>
                <td class="px-6 py-4">      
                    {{ s.survivedTime }}
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
            info: [],
            player: [],
        }
    },
    created() {
        axios.get("https://projectzomboid.id/api/server/status").then((response) => {
        this.info = response.data;
    });  
    axios.get("https://projectzomboid.id/api/server/players").then((response) => {
        this.player = response.data;
    });
    }
}
</script>
