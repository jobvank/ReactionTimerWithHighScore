<template>
  <div v-if="!isSaved">
    <label>Your name:</label>
    <input id="name" v-model="name">
    <button @click="saveHighscore">Save highscore</button>
  </div>  
</template>

<script>
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.VUE_APP_SUPABASE_URL, process.env.VUE_APP_SUPABASE_KEY)

export default {
  data() {
    return {
      name: "",
      isSaved: false
    }
  },
  props: {
    time: 0
  },
  methods: {
    saved() {
      this.$emit('saved');  
    },

    async saveHighscore() {
      this.isSaved = true;
      const { data, error } = await supabase
        .from('scores')
        .insert([
          { name: this.name, reaction_time: this.time }
        ]);
      this.saved();  
    }
  }
}
</script>

<style>

</style>