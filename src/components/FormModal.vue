<template>
  <div class="modal fade" v-bind:id="id" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <form class="modal-content" @submit.prevent="emitSubmit">
        <div class="modal-header">
          <h5 class="modal-title">{{title}}</h5>
          <button class="close" data-dismiss="modal" @click="emitCancel">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <button
            id="resetRegister"
            type="reset"
            class="btn btn-danger"
            @click="emitCancel"
            data-dismiss="modal"
          >Cancel</button>
          <button type="submit" class="btn btn-success">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const data = () => ({
  value: "",
});

const props = {
  title: {
    default: "Open",
  },
  id: {
    default: "ModalFormRegister",
  },
};

const methods = {
  emitSubmit() {
    this.$emit("modalSubmit");
  },
  emitCancel() {
    this.$emit("modalCancel");
  },
};

export default {
  data: data,
  name: "FormModal",
  props: props,
  methods: methods,
};
</script>

<style>
</style>