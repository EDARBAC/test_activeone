<template>
    <div class="w-40">
        <form @submit.prevent="add" class="d-flex column">
            <div class="d-flex mt-2">
                <label class="w-30 text-right mr-2">ID</label>
                <input type="text" v-model="form.id">
            </div>
            <div class="d-flex mt-2">
                <label class="w-30 text-right mr-2">NOMBRE</label>
                <input type="text" v-model="form.nombre">
            </div>
            <div class="d-flex mt-2">
                <label class="w-30 text-right mr-2">PODERES</label>
                <input type="text" v-model="form.poderes" placeholder="VOLAR,SUPERVELOCIDAD">
            </div>
            <div class="d-flex mt-2">
                <label class="w-30 text-right mr-2">URL FOTO</label>
                <input type="text" v-model="form.uri">
            </div>
            <div class="d-flex justify-content-center mt-2">
                <button class="btn w-auto">Guardar</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'form-hero',
    data() {
        return {
            form: {
                id: null,
                nombre: null,
                poderes: null,
                uri: null
            }
        }
    },
    methods: {
        add(){
            if(!this.form.id ||!this.form.nombre || !this.form.poderes)
                return;
            let data = {...this.form};
            if(!this.form.uri)
                data.uri = 'https://img2.freepng.es/20180331/xgw/kisspng-x-logo-symbol-wiki-x-5abf56bb424f96.3240323915224890192716.jpg';
            if(data.poderes?.length){
                data.poderes = data.poderes.split(',');
            }
            this.$emit('addHero',data);
        }
    }
}
</script>