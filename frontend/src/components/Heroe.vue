<template>
    <div class="m-2">
        <span v-text="hero.nombre"></span>
        <div class="image">
            <img :src="hero.uri" alt="" width="200" height="200" v-if="hero.uri">
        </div>
        <div class="d-flex justify-content-center">
            <button type="button" @click="remove" class="btn">ELIMINAR</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Heroe',
    props: ['hero','index'],
    methods: {
        remove(){
            this.$emit('removeHero',this.index);
        }
    }
}
</script>