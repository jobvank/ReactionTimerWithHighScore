<template>
  <div v-if="!saved">
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
      saved: false
    }
  },
  props: {
    time: 0
  },
  methods: {
    async saveHighscore() {
      this.saved = true;
      const { data, error } = await supabase
        .from('scores')
        .insert([
          { name: this.name, reaction_time: this.time }
        ])  
    }
  }
}
</script>

<style>

</style>