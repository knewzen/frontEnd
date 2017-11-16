<template>
  <div class="blog">
    <vueMarkDown></vueMarkDown>
  </div>
</template>

<script>
  import vueMarkDown from '@/components/markdown'
  export default {
    name: 'writeBlog',
    components: {
      vueMarkDown
    }
  }
</script>