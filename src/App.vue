<template>
  <div>
    <div class="bg-gray-800 fixed w-full z-10 top-0 shadow-sm font-poppins">
      <nav
        class="
          container
          px-6
          py-4
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
            <img src="https://www.projectzomboid.id/assets/img/hero-logo.png" alt="" class="h-14">
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-400
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <li class="text-md uppercase font-medium text-gray-400 hover:text-red-600">
            <router-link to="/">Home</router-link>
          </li>
          <li class="text-md uppercase font-medium text-gray-400 hover:text-red-600">
            About
          </li>
          <li class="text-md uppercase font-medium text-gray-400 hover:text-red-600">
            <router-link to="/server">Server Status</router-link>
          </li>
          <li class="text-md uppercase font-medium text-gray-400 hover:text-red-600">
            Donate
          </li>
          <li class="text-md uppercase font-medium text-gray-400 hover:text-red-600">
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
                class="w-5 h-5 text-gray-400 hover:text-red-700"
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
                bg-gray-700
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
                  text-sm text-indigo-100
                  hover:bg-indigo-400 hover:text-indigo-100
                "
              >
                Mods by IPZ
              </router-link>
              <router-link
                to="/"
                class="
                  block
                  px-4
                  py-2
                  text-sm text-indigo-100
                  hover:bg-indigo-400 hover:text-indigo-100
                "
              >
                Smuggler
              </router-link>
              <router-link
                to="/"
                class="
                  block
                  px-4
                  py-2
                  text-sm text-indigo-100
                  hover:bg-indigo-400 hover:text-indigo-100
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
                  text-sm text-indigo-100
                  hover:bg-indigo-400 hover:text-indigo-100
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