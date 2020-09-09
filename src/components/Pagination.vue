<template>
  <div class="mt-5 mb-1 mx-auto d-table" v-if="pagination">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li
        :key="pos"
        v-for="(pos) in totalPages"
        class="page-item"
        v-bind:class="{ active: (index==pos), 'd-none': ( pos<min || max<pos)}"
      >
        <a class="page-link">{{pos}}</a>
      </li>
      <li class="page-item">
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
const data = () => ({
  totalPages: [],
  min: 1,
  max: 1,
});

const props = ["pagination", "index"];

const watch = {
  pagination() {
    let total = Math.round(this.pagination / 10);
    this.totalPages = [];
    for (let index = 1; index <= total; index++) {
      this.totalPages.push(index);
    }

    this.max = 6 <= total ? 6 : total;

    return this.pagination;
  },
};

export default {
  name: "Pagination",
  data,
  props,
  watch,
};
</script>
