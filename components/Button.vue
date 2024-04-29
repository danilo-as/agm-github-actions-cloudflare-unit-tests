<template>
  <button :class="`btn-${props.type} btn-${props.size}`"
          class="bg-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border hover:text-white focus:ring-4 focus:outline-none">
    <slot/>
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'medium'
})
</script>

<style>
.btn-small {
  @apply w-24;
}

.btn-medium {
  @apply w-40;
}

.btn-large {
  @apply w-80;
}

.btn-primary {
  @apply text-blue-700 border-blue-500;

  &:hover {
    @apply bg-blue-500;
  }

  &:focus {
    @apply ring-blue-800;
  }
}

.btn-secondary {
  @apply text-green-700 border-green-500;

  &:hover {
    @apply bg-green-500;
  }

  &:focus {
    @apply ring-green-800;
  }
}
</style>