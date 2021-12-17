<template>
    <div class="w-50">
        <form @submit.prevent="add" class="d-flex column">
            <div class="text-right">
                <label>ID</label>
                <input type="text" v-model="form.id">
            </div>
            <div class="text-right">
                <label>NOMBRE</label>
                <input type="text" v-model="form.nombre">
            </div>
            <div class="text-right">
                <label>PODERES</label>
                <input type="text" v-model="form.poderes">
            </div>
            <div class="text-right">
                <label>URL FOTO</label>
                <input type="text" v-model="form.uri">
            </div>
            <button class="btn w-auto">Guardar</button>
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
            if(!this.form.id ||!this.form.nombre || !this.form.poderes || !this.form.uri)
                return;
            let data = {...this.form};
            if(data.poderes){
                data.poderes = data.poderes.split(',');
            }
            this.$emit('addHero',data);
        }
    }
}
</script>