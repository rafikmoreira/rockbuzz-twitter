<template>
  <div class="profile-page">
    <navbar-wrapper />
    <header>
      <div class="container mx-auto mt-3 lg:mt-10 profile-configs p-2 lg:p-0">
        <div>
          <PerfilCard />
        </div>
        <div>
          <div class="options borda p-2">
            <div class="mb-5">
              <Title text="Configurações" />
            </div>
            <form @submit="validate">
              <form-item
                name="nome"
                type="text"
                label="Nome"
                placeholder="Insira o seu nome"
              />
              <form-item
                name="username"
                type="text"
                label="Nome de usuário"
                placeholder="Insira o seu username"
              />
              <form-item
                name="e-mail"
                label="E-mail"
                type="email"
                placeholder="Insira o seu e-mail"
              />
              <div class="flex justify-end">
                <button type="submit" class="btn-submit">Atualizar</button>
              </div>
            </form>
          </div>
          <div class="mt-5 lg:my-5">
            <Tweets />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavbarWrapper from '~/components/Navbar/NavbarWrapper.vue'
import PerfilCard from '~/components/PerfilCard/PerfilCard.vue'
import FormItem from '~/components/FormItem.vue'
import Title from '~/components/Title.vue'
import Tweets from '~/components/Tweets/Tweets.vue'

export default Vue.extend({
  name: 'ProfilePage',
  components: {
    NavbarWrapper,
    PerfilCard,
    FormItem,
    Title,
    Tweets,
  },
  head: {
    title: 'Twitter BR - Profile',
  },
  methods: {
    validate(e: Event) {
      e.preventDefault()
      alert('Validar dados')
    },
  },
})
</script>

<style lang="scss" scoped>
.profile-page {
  .profile-configs {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media (min-width: 1024px) {
      grid-template-columns: 1.3fr 3.9fr;
    }
    .options {
      background-color: white;
    }

    .btn-submit {
      padding: 10px 30px;
      background-color: #000;
      color: #fff;
      transition: 0.4s;
      &:hover {
        background-color: #1da1f2;
      }
    }
  }
  margin-bottom: 90px;
  @media (min-width: 1024px) {
    margin-bottom: 0;
  }
}
</style>
