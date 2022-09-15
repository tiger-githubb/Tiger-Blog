<template>
  <div class="home">
    <BlogPost v-if="!user || user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in blogPostsFeed" :key="index" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Voir les articles les plus recents </h3>
        <div class="blog-cards">
          <BlogCard :post="card" v-for="(card, index) in blogPostCards" :key="index"/>
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
        <div class="container">
          <h2>Ne manquez jamais un publication.Inscription gratuite.</h2>
          <router-link class="router-button" to="#">
            Inscription aux blogs -->
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost-comp.vue';
import BlogCard from '../components/BlogCard-comp.vue';

export default {
  name: "Home",
  components: { BlogPost, BlogCard },
  data() {
    return {
      welcomeScreen: {
        title: 'Acceuil',
        blogPost: "Je m'appelle Aristide et je suis développeur web ainsi que gérant d'une agence web spécialisée dans le développement web. Sur cet site , je souhaite partager des astuces et retours d'expériences qui seront utiles à tous les développeurs... ",
        welcomeScreen: true,
        photo: 'coding'
      }
    };
  },
  computed: {
    blogPostCards() {
      return this.$store.getters.blogPostCards;
    },
    blogPostsFeed() {
      return this.$store.getters.blogPostsFeed;
    },
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 3px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
