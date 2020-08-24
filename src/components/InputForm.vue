<template>
  <div class="form-group" v-bind:class="status==='is-invalid'? 'has-danger':'has-success'">
    <label class="d-block form-control-label">
      {{ label }}
      <input
        v-model="value"
        @keyup="emitEvent"
        v-bind:type="type"
        class="form-control"
        v-bind:class="status"
        v-bind:placeholder="placeholder"
      />
    </label>

    <div
      v-if="status!== null"
      v-bind:class="status==='is-invalid'? 'invalid-feedback':'valid-feedback'"
      class="d-block"
    >{{ messageStatus }}</div>
  </div>
</template>

<script>
const data = () => ({
  value: "",
});

const props = {
  status: {
    default: null,
  },
  messageStatus: {
    default: null,
  },
  type: {
    default: "text",
  },
  label: {
    deafult: "Input",
  },
  placeholder: {
    default: "",
  },
};

const methods = {
  emitEvent() {
    this.$emit("value", this.value);
  },
};

export default {
  data: data,
  name: "InputForm",
  props: props,
  methods: methods,
};
</script>

<style></style>
