<script setup lang="ts">
import Button from '@/components/Button.vue';
const emit = defineEmits();

/** emits sort-event that is handled in the ProductContainer Component */
const sortEvent = (sortValue: String) => {
  emit('sort-event', sortValue);
};
</script>

<template>
  <section class="grid-container">
    <div></div>
    <div class="productName-container">
      <h2 class="table-productName">Product</h2>
      <Button :iconPrefix="'fas'" :iconName="'angle-up'" :click-handler="() => sortEvent('name-up')" />
      <Button class="sort-down" :iconPrefix="'fas'" :iconName="'angle-down'"
        :click-handler="() => sortEvent('name-down')" />
    </div>
    <div>Market</div>
    <div>
      Price
      <Button :iconPrefix="'fas'" :iconName="'angle-up'" :click-handler="() => sortEvent('price-up')" />
      <Button class="sort-down" :iconPrefix="'fas'" :iconName="'angle-down'"
        :click-handler="() => sortEvent('price-down')" />
    </div>
    <div>Difference</div>
    <div></div>
  </section>
</template>

<style scoped>
.grid-container {
  display: grid;
  gap: 30px;
  grid-template-columns: 0.1fr 4fr 0.5fr 1fr 1fr 0.5fr;
}

.table-productName {
  color: var(--color-primary);
  font-size: medium;
}

.productName-container {
  display: flex;
  align-items: center;
}

.sort-down {
  margin-left: -5px;
}

@media (min-width: 600px) {
  .grid-container {
    gap: 50px;
  }

  .table-productName {
    font-size: x-large;
  }
}
</style>