<script setup>
import { objectToString } from '@vue/shared';
import { onMounted } from "vue";
import MaterialBadge from "../components/MaterialBadge.vue";
import MaterialAvatar from "../components/MaterialAvatar.vue";

defineProps({
  videoInfo: {
    type: Object,
    required: true,
  },
});

function downloadUrl(videoInfo, format) {
  return encodeURI(
    `${import.meta.env.VITE_API_URL}/data/youtube/${videoInfo.videoId}/format:${format}`
  );
}
//hooks
onMounted(() => {

});

</script>
<template>
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      <a class="d-block blur-shadow-image">
        <img class="img-fluid shadow border-radius-lg" loading="lazy"
          :src="videoInfo.thumbnails[videoInfo.thumbnails.length - 1]" />
      </a>
    </div>
    <div class="card-body px-0">
      <h5>
        <a class="text-dark font-weight-bold">{{
            videoInfo.title
        }}</a>
      </h5>
      <div class="author align-items-center mb-4">
        <img src="https://bit.ly/3pZfIPh" alt="Mathew Glock" class="avatar shadow"
          loading="lazy">
        <div class="name ps-2"><span>{{ videoInfo.author}}</span>
          <div class="stats"><small>Posted on 28 February</small></div>
        </div>
      </div>

      <MaterialBadge :key="index" color="light" class="text-dark me-1" v-for="(keyword, index) in videoInfo.keywords ">
        {{ keyword }}
      </MaterialBadge>
      <div class="mt-3 mb-5" v-html="videoInfo.description"></div>
      <div class="row mb-4">
        <div class="col-auto">
          <span class="h6 me-1">{{ Number(videoInfo.lengthSeconds / 60).toLocaleString() }}</span>
          <span>Minute</span>
        </div>
        <div class="col-auto">
          <span class="h6 me-1">{{ Number(videoInfo.viewCount).toLocaleString() }}</span>
          <span>View</span>
        </div>
      </div>
      <a :disabled="!videoInfo.downloadable" class="text-lg icon-move-right" :href="downloadUrl(videoInfo, 'AUDIO')">
        Download Best Audio File<i class="fas fa-download text-xs ms-1"></i>
      </a>
    </div>
  </div>
</template>