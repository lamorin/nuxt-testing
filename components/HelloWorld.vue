<script lang="ts" setup>
const props = defineProps(['message']);
</script>

<template>
  <div>
    {{ props.message }}
  </div>
</template>

<style scoped></style>
