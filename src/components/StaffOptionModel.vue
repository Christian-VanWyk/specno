<template>
    <div>
        <Model>
            <Button @click="$emit('showOption','Edit')" class="modelButton">Edit Staff Member</Button>
            <Button @click="$emit('showOption','Delete')" class="modelButton white">Delete Staff Member</Button>
        </Model>
    </div>
</template>
<script>
import Model from './Model.vue';
export default {
    components: {
        Model
    },
    setup() {

    }
}
</script>