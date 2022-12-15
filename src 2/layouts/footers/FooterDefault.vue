<script setup>
import logoDark from "@/assets/img/Author-logo.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "Youtube Downloader",
      logo: logoDark,
      route: "https://andang72.blogspot.com"
    })
  }, 
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">
          <div>
            <a :href="brand.route" target="_blank" style="font-weight: 300;">
              <img :src="brand.logo" class="mb-3 footer-logo" style="border-radius: 50%;" alt="main_logo" /> 
               Made with <span style="color: red;">♡</span> for my son.  
            </a>
          </div>
        </div>
        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Copyright © {{ new Date().getFullYear() }} Donghyuck.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
