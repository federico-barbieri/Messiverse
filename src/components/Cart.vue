<template>
    <div>
        <span>CART</span>
        <ul>
            <li>thing 1</li>
            <li>thing 2</li>
            <li>thing 1</li>
            <li>thing 2</li>
            <li>thing 1</li>
            <li>thing 2</li>
        </ul>
        <span class="ex" @click="closeWithEmitEvent">X</span>
    </div>
    
</template>

<script setup>


const emit = defineEmits(['closeWithEmitEvent'])

function closeWithEmitEvent(){
    emit("closeWithEmitEvent", "Close cart")
}

</script>

<style scoped>

div{
    width: 40rem;
    height: 40rem;
    background-color: red;
    border-radius: 10px;
    margin: 10rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: black;
    font-size: 2rem;
}

.ex:hover{cursor: pointer;}

</style>