<template>
  <el-row class="articleList">
    <el-col class="articleItem" v-for="(article, index) in selfList" :key="article.id">
      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="../../assets/blog/hamburger.png" class="image" @click="() => handleTurnToEdit(article)">
        <div style="padding: 14px;">
          <span>{{ article.title }}</span>
          <div class="tags">
            <el-tag v-for="tag in article.tags"
              :key="tag"
              :type="getTagType(tag)"
            >
              {{ tag }}
            </el-tag>
          </div>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import { mapGetters } from 'vuex'
  import {
    formatTime,
    getTagType
  } from '@/utils'
  export default {
    name: 'articleList',
    created () {
      this.$store.dispatch('GetArticleList', 0)
    },
    computed: {
      ...mapGetters([
        'articleList'
      ])
    },
    watch: {
      articleList (newList) {
        this.selfList = newList
      }
    },
    data() {
      return {
        selfList: this.articleList,
        currentDate: formatTime(new Date())
      };
    },
    methods: {
      handleTurnToEdit (article) {
        this.$store.commit('SET_ACTIVEBLOG', {
          title: article.title,
          tags: article.tags,
          content: article.content
        })
        this.$router.push({
          path: 'edit'
        })
      },
      getTagType
    }
  }
</script>

<style lang="scss">
.articleList {
  padding: 24px;
  height: 100%;
  box-sizing: border-box;
  .articleItem {
    width: 20%;
    padding: 12px;
  }
  .card {
    cursor: pointer;
    box-shadow: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 1, 1);
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom, .tags {
    margin-top: 13px;
    line-height: 12px;
    & .el-tag {
      margin: 6px 6px 0 0;
    }
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
}
</style>