<template>
    <div>
        <Model>
            <div class="headingContainer" >
                <button @click="$emit('close')"><i class="icon leftIcon"></i></button>
                <h2>Are you sure you want to Delete Staff Member?</h2>
            </div>
            <Button @click="$emit('delete')" class="modelButton red">Delete Member</Button>
            <Button @click="$emit('keepMember')" class="modelButton white">Keep Member</Button>
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