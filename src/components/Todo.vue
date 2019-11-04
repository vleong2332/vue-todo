<template>
  <div>
    <form ref="form" @submit.prevent="handleNewItem">
      <md-field>
        <label>Enter new item</label>
        <md-input v-model="formData.newItem" @change="trim('newItem')" required />
      </md-field>
      <md-button type="submit" class="md-primary md-raised">Add</md-button>
      <md-button class="md-secondary md-raised" @click="clearNewItem">Clear</md-button>
    </form>

    <md-list>
      <md-list-item v-for="item in items" v-bind:key="item.id">
        <span class="md-list-item-text" v-bind:class="{ 'item__text--done': item.isDone }">{{ item.text }}</span>
        <md-button class="md-primary" @click="toggleItemDone(item.id)">{{ getItemText(item.isDone) }}</md-button>
        <md-button v-if="item.isDone" class="md-primary md-raised" @click="removeItem(item.id)">Remove</md-button>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      items: [],
      formData: {
        newItem: '',
      }
    }
  },
  methods: {
    trim: function (formField) {
      this.formData[formField] = this.formData[formField].trim();
    },
    handleNewItem: function () {
      this.items = [
        ...this.items,
        { id: this.items.length, text: this.formData.newItem, isDone: false }
      ];
      this.clearNewItem();
    },
    clearNewItem: function () {
      this.formData.newItem = '';
    },
    toggleItemDone: function (itemId) {
      this.items = this.items.map(x => {
        if (x.id === itemId) return { ...x, isDone: !x.isDone };
        return x;
      })
    },
    getItemText: function (isDone) {
      return isDone ? 'Undo' : 'Done';
    },
    removeItem: function (itemId) {
      this.items = this.items.filter(x => x.id !== itemId);
    },
  }
}
</script>

<style scoped>
main {
  padding: 1rem;
}
.item__text--done {
  text-decoration: line-through;
  color: #999;
}

</style>