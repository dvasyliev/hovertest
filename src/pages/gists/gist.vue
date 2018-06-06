<template>
  <li class="gist">
    <b>Description:</b> {{ gist.description }}
  </li>
</template>

<script>
export default {
  props: {
    gist: Object
  }
}
</script>
