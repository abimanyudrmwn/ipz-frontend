<template>
  <main class="bg-gray-900 h-full w-full py-32">
      <h1 class="text-white text-center text-3xl font-bold animate-pulse">Server Status</h1>
    
      <div class="grid grid-cols-1 gap-6 py-16 mx-12 md:grid-cols-2">
        <div v-for="i in info" :key="i.maxPlayers" class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Server Name
                      </th>
                      <td class="px-6 py-4">
                          {{i.serverName}}
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          IP
                      </th>
                      <td class="px-6 py-4">
                          {{i.ip}}
                      </td>
                  </tr> 
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Port
                      </th>
                      <td class="px-6 py-4">
                          {{i.port}}
                      </td>
                  </tr> 
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Status
                      </th>
                      <td class="px-6 py-4">
                          {{i.serverStatus}}
                      </td>
                  </tr> 
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          In-Game Time
                      </th>
                      <td class="px-6 py-4">
                          {{i.clock}}
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Players
                      </th>
                      <td class="px-6 py-4">
                          {{i.playerCount}}/{{i.maxPlayers}}
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Season Age
                      </th>
                      <td class="px-6 py-4">
                          {{i.seasonAge}}
                      </td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Lorem Ipsum
                </th>
                <td class="px-6 py-4">
                    Lorem Ipsum
                </td>
                <td class="px-6 py-4">
                    Lorem Ipsum
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
    }
  },
  created() {
    axios.get("https://projectzomboid.id/api/server/status").then((response) => {
      this.info = response.data;
  }); 
  }
}
</script>
