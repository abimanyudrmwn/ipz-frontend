<template>
  <div>
    <div class="bg-hitam fixed w-full z-10 top-0 shadow-sm font-poppins">
      <nav
        class="
          container
          px-6
          py-2
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-400
              md:text-2xl
              hover:text-blue-400
            "
            >
            <img src="https://res.cloudinary.com/belanga/image/upload/v1674141232/ipz/Logo_A_dohqk5.png" alt="" class="h-14">
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-putih
                sm:text-putih
                hover:text-abutua
                focus:outline-none focus:text-abutua
              "
            >
            <svg class="text-putih" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2 s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2 S29.104,22,28,22z" fill="white"></path></svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            mb-4
            sm:mb-0
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-md uppercase font-medium text-putih hover:text-merah hover:font-medium">
            <router-link to="/">Home</router-link>
          </li>
          <li class="text-md uppercase font-medium text-putih hover:text-merah hover:font-medium">
            About
          </li>
          <li class="text-md uppercase font-medium text-putih hover:text-merah hover:font-medium">
            <router-link to="/server">Server Status</router-link>
          </li>
          <li class="text-md uppercase font-medium text-putih hover:text-merah hover:font-medium">
            Donate
          </li>
          <li class="text-md uppercase font-medium text-putih hover:text-merah hover:font-medium">
            <button
              @click="show = !show"
              class="
                flex
                items-center
                text-gray-400
                hover:text-red-700
                rounded-md
                focus:outline-none
              "
            >
              <span>MORE</span>
              <svg
                class="w-5 h-5 text-putih hover:text-merah"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              v-show="show"
              class="
                py-2
                mt-2
                bg-hitam
                bg-opacity-80
                rounded-md
                lg:absolute lg:right-0
                w-44
              "
            >
              <router-link
                to="/"
                class="
                  block
                  px-4
                  py-2
                  text-sm text-putih
                  hover:bg-merah hover:text-indigo-100
                "
              >
                Mods by IPZ
              </router-link>
              <router-link
                to="/vehicles"
                class="
                  block
                  px-4
                  py-2
                  text-sm text-putih
                  hover:bg-merah hover:text-putih
                "
              >
                Smuggler
              </router-link>
              <router-link
                to="/achievement"
                class="
                  block
                  px-4
                  py-2
                  text-sm text-putih
                  hover:bg-merah hover:text-putih
                "
              >
                Achievement
              </router-link>
              <router-link
                to="/"
                class="
                  block
                  px-4
                  py-2
                  text-sm text-putih
                  hover:bg-merah hover:text-putih
                "
              >
                Wiki
              </router-link>
              <router-link
                to="/"
                class="
                  block
                  px-4
                  py-2
                  text-sm text-putih
                  hover:bg-merah hover:text-putih
                "
              >
                Contact Us
              </router-link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <router-view />
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  data() {
    return {
      showMenu: false,
      show: false,
    };
  },

  components: {
    Footer
   }
};
</script>