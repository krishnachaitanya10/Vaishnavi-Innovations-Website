<template>
    <div class="accordion">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Accordion"
};
</script>

<style scoped>
.accordion {
    width: 100%;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
