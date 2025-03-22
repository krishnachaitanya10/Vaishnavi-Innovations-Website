<template>
    <div class="accordion-item">
        <div @click="toggleAccordion" class="accordion-header">
            <slot name="accordion-trigger"></slot>
        </div>
        <div v-if="isOpen" class="accordion-body">
            <slot name="accordion-content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "AccordionItem",
    data() {
        return {
            isOpen: false
        };
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        }
    }
};
</script>

<style scoped>
.accordion-item {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    cursor: pointer;
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #ff5a3c;
    color: #fff;
    border-radius: 5px;
}

.accordion-header:hover {
    background: #e04a2b;
}

.accordion-body {
    padding: 10px;
    background: #fff;
}
</style>
