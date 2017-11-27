<template>
  <div class="panel">
    <vueMarkDown ref="markdown"></vueMarkDown>
    <div class="controlBox">
      <el-row class="title item">
        <el-col :span="2">标题</el-col>
        <el-col :span="6">
          <el-input v-model="title" placeholder="文章标题"></el-input>
        </el-col>
      </el-row>
      <el-row class="tags item">
        <el-col :span="2">
         文章标签：
        </el-col>
        <el-col :span="12">
          <TagSelect :value="tags" @select="handleChangeTag" style="width: 100%;"></TagSelect>
        </el-col>
      </el-row>
      <el-row class="button item">
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="6">
          <el-button @click="handleSubmit">保存</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import vueMarkDown from '@/components/markdown'
  import TagSelect from '@/components/TagSelect'
  export default {
    name: 'writeBlog',
    components: {
      vueMarkDown,
      TagSelect
    },
    computed: {
      ...mapGetters([
        'activeBlog',
        'isEditingBlog'
      ])
    },
    beforeDestroy () {
      this.$store.commit('RESET_ACTIVEBLOG')
    },
    mounted () {
      let activeBlog = this.activeBlog
      if (activeBlog.title === undefined) {
        return false
      }
      Object.keys(activeBlog).forEach(key => {
        this[key] = activeBlog[key]
        if (key === 'content') {
          this.$refs.markdown.msg.mdValue = activeBlog[key]
        }
      })
    },
    data () {
      return {
        title: '',
        tags: [],
        content: ''
      }
    },
    methods: {
      handleSubmit () {
        if (this.isEditingBlog) {
          this.handleUpdateBlog()
        } else {
          this.handleCreateBlog()
        }
      },
      handleUpdateBlog () {
        let data = this.activeBlog
        this.$store.dispatch('UpdateArticle', {
          id: data.id,
          title: this.title,
          content: this.$refs.markdown.msg.mdValue,
          tags: this.tags
        }).then(res => {
          this.$message.success('修改成功')
        })
      },
      handleCreateBlog () {
        console.log('title: ', this.title)
        console.log('tags', JSON.stringify(this.tags))
        console.log('content: ', this.$refs.markdown.msg.mdValue)
        this.$store.dispatch('CreateArticle', {
          title: this.title,
          tags: this.tags,
          content: this.$refs.markdown.msg.mdValue
        }).then(res => {
          this.$message.success('保存成功')
        })
      },
      handleChangeTag (newTags) {
        this.tags = newTags
      }
    }
  }
</script>

<style lang="scss">
  .panel {
    height: 100%;
    .controlBox {
      color: #5e6d82;
      padding: 4px 2px;
      .item {
        line-height: 36px;
        margin: 6px 0 6px 12px;
      }
    }
  }
</style>