<template>
    <div class="d-flex">
        <input type="text" v-model="poder">
        <button type="button" @click="search" class="btn">Buscar </button>
    </div>
</template>

<script>
export default {
    name: 'Buscador',
    data() {
        return {
            poder: null
        }
    },
    methods: {
        search(){
          let data = this.poder? this.poder.trim().toLowerCase() : null;
          this.$emit('search',data);
        }
    }
}
</script>