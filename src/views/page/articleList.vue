<template>
  <el-row class="articleList">
    <el-col class="articleItem" v-for="(article, index) in selfList" :key="article.id">
      <el-card :body-style="{ padding: '0px' }" class="card">
        <img src="../../assets/blog/hamburger.png" class="image" @click="handleTurnToEdit">
        <div style="padding: 14px;">
          <span>{{ article.title }}</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import { mapGetters } from 'vuex'

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
        currentDate: new Date()
      };
    },
    methods: {
      handleTurnToEdit () {
        this.$router.push({
          path: 'edit'
        })
      }
    }
  }
</script>

<style lang="scss">
.articleList {
  padding: 24px;
  height: 100%;
  overflow: auto;
  .articleItem {
    width: 25%;
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
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
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