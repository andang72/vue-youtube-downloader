<script setup>
import { ref, inject, onMounted, onUnmounted, reactive } from "vue";
import axios from "axios";

//navbars and footer components
import DefaultNavbar from "../layouts/navbars/NavbarDefault.vue";
import DefaultFooter from "../layouts/footers/FooterDefault.vue";
import TransparentVideoCard from "./TransparentVideoCard.vue";

//image
import bg0 from "@/assets/img/bg10.jpg";

//dep
import Typed from "typed.js";


//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialInput from "@/components/MaterialInput.vue";

// Toaster components
import { createToaster } from "@meforma/vue-toaster";

const $loading =  inject('$loading');

const toaster = createToaster({ position: "top-right" });
//const body = document.getElementsByTagName("body")[0];

const videoId = ref(null);
const visible = ref(false);
const videoInfo = reactive({
  videoId: ""
});

function downloadYoutube() {

  const loader = $loading.show({
    // Optional parameters
  });

  axios({
    url: `${import.meta.env.VITE_API_URL}/data/youtube/${videoId.value}`,
    method: "get",
    data: JSON.stringify({}),
  })
    .then(response => {
      const data = response.data;
      visible.value = true;
      videoInfo.videoId = data.details.videoId;
      videoInfo.title = data.details.title;
      videoInfo.description = data.details.description;
      videoInfo.keywords = data.details.keywords;
      videoInfo.thumbnails = data.details.thumbnails;
      videoInfo.downloadable = data.details.downloadable;
      videoInfo.lengthSeconds = data.details.lengthSeconds;
      videoInfo.live = data.details.live;
      videoInfo.viewCount = data.details.viewCount;
    })
    .catch(error => {
      /*if (
        error.config.hasOwnProperty("errorHandle") &&
        error.config.errorHandle === false
      ) {
        toaster.error(error.message);
        return Promise.reject(error);
      }
      */
      if (error.response) {
        const data = error.response.data;
        if (data.error) {
          toaster.error(data.error.message);
        }
      } else {
        toaster.error(error.message);
      }
    })
    .finally(() => { 
      loader.hide();
    });

}

//hooks
onMounted(() => {

});

onUnmounted(() => {

});

</script>
<template>
  <DefaultNavbar transparent />
  <header class="bg-gradient-dark">
    <div class="page-header min-vh-45" :style="{ backgroundImage: `url(${bg0})` }">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">

          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <section class="py-7">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mx-auto">
            <div class="card-header px-4 py-sm-5 py-3">
              <h2>Convert & Download</h2>
              <p class="lead">support video and audio format download</p>

            </div>
            <div class="card-body pt-1">
              <div class="row">
                <div class="col-md-12 pe-2 mb-3">
                  <MaterialInput class="input-group-static mb-4" label="YouTube Video ID" type="text"
                    placeholder="Paste your video ID here." v-model="videoId" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-8 text-end ms-auto">
                  <MaterialButton variant="gradient" color="primary" size="lg" class="w-auto me-2"
                    @click="downloadYoutube">
                    Download
                    <i class="material-icons ms-2" aria-hidden="true">download</i>
                  </MaterialButton>
                </div>
              </div>
            </div>


          </div>
          <div class="col-lg-6">
            <section class="py-3">
              

              <div class="container">
                <div class="row">
                  <div class="col-lg-12 col-sm-12">
                    <TransparentVideoCard v-if="visible" :videoInfo="videoInfo" />
                  </div>
                </div>
              </div>

            </section>

          </div>
        </div>
      </div>
    </section>
  </div>
  <DefaultFooter />
</template>
