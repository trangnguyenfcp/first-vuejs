<template>
<div class="mb-3 ml-4">
    <div>
          <h1 style="text-align: center" @ class="mt-4 mb-4">{{title}}</h1>
<slot name="title"></slot>
    </div>
<div>
  <v-btn v-on:click = "changetitleEvent">Change title</v-btn>
  <slot name="button"></slot>
</div>
</div>
</template>

<script>
export default {
    name: "header-comp",
    props: ['title'],
    methods: {
        changetitleEvent(e) {
            var data = {
                title: 'Chang title success'
            }
            this.$emit('changetitle', data)
        }
    }

}
</script>

<style>

</style>