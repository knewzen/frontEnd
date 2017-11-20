<template>
  <el-select
    v-model="selectedList"
    multiple
    :multiple-limit="4"
    filterable
    allow-create
    placeholder="请选择文章标签">
    <el-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    props: {
      value: Array
    },
    data() {
      return {
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }, {
          value: 'React',
          label: 'React'
        }, {
          value: 'Vue',
          label: 'Vue'
        }, {
          value: 'NodeJS',
          label: 'NodeJS'
        }],
        selectedList: []
      }
    },
    mounted () {
      this.selectedList = this.value || []
    },
    watch: {
      value (newValue) {
        this.selectedList = newValue
      },
      selectedList (newList) {
        this.$emit('select', newList)
      }
    }
  }
</script>