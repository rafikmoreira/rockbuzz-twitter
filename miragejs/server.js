import { createServer } from 'miragejs'

function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = 'api'
      this.urlPrefix = 'http://localhost:3000'

      this.get('/last7Trends', () => {
        return []
      })

      this.get('/whoToFollow', () => {
        return [
          {
            name: 'Artur Santos',
            id: 1,
            followers: 200,
            user: 'artur_santos2021',
            tweets: 2400,
            following: 200,
            coverPhotoUrl:
              'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            photoUrl:
              'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          },
          {
            name: 'Ana Clara',
            id: 2,
            followers: 200,
            user: 'ana_mgdias',
            tweets: 2400,
            following: 200,
            coverPhotoUrl:
              'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            photoUrl:
              'https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          },
        ]
      })

      this.get('/userLogin', () => {
        return {
          name: 'Rafik Moreira',
          id: 3213123,
          followers: 200,
          user: 'rafikmoreira',
          tweets: 2400,
          following: 200,
          coverPhotoUrl:
            'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          photoUrl:
            'https://images.pexels.com/photos/1182825/pexels-photo-1182825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }
      })

      this.get('/last10TweetsFollowing', () => {
        return [
          {
            id: 1,
            text: 'Grandes mentes discutem ideias; mentes comuns discutem eventos; mentes pequenas discutem pessoas.',
            imagePostUrl: '',
            favorite: false,
            user: {
              name: 'Eleanor Roosevelt',
              id: 1,
              followers: 200,
              user: 'eleanor_023',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
            },
          },
          {
            id: 2,
            text: 'Quando eu me atrevo a ser poderoso - para usar minha força no serviço da minha visão, então torna-se cada vez menos importante se eu tenho medo.',
            imagePostUrl:
              'https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            favorite: false,
            user: {
              name: 'Audre Lorde',
              id: 2,
              followers: 200,
              user: 'audre_2021',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.pexels.com/photos/4132375/pexels-photo-4132375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
          },
          {
            id: 3,
            text: 'Inteligência é a capacidade de se adaptar à mudança.',
            imagePostUrl: '',
            favorite: false,
            user: {
              name: 'Fernanda Maria',
              id: 3213123,
              followers: 200,
              user: 'fernanda_maria2020',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.pexels.com/photos/4177650/pexels-photo-4177650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
          },
          {
            id: 4,
            text: 'Eu não quero chegar ao fim da minha vida e descobrir que eu vivi apenas o comprimento dela. Eu quero ter vivido a largura também',
            imagePostUrl:
              'https://images.pexels.com/photos/2076923/pexels-photo-2076923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            favorite: false,
            user: {
              name: 'Diane Ackerman',
              id: 3213123,
              followers: 200,
              user: 'lua_soa2',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
          },
          {
            id: 5,
            text: 'Nenhum mentiroso tem uma memória suficientemente boa para ser um mentiroso de êxito.',
            imagePostUrl: '',
            favorite: false,
            user: {
              name: 'Abraham Lincoln',
              id: 3213123,
              followers: 200,
              user: 'carlos_pereira',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            },
          },
          {
            id: 6,
            text: 'O homem que empenha todo o seu trabalho e imaginação em oferecer por um dólar o mais possível, em vez de menos, está condenado ao sucesso.',
            imagePostUrl:
              'https://images.pexels.com/photos/2877854/pexels-photo-2877854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            favorite: false,
            user: {
              name: 'Henry Ford',
              id: 3213123,
              followers: 200,
              user: 'henry_ford',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
            },
          },
          {
            id: 7,
            text: 'Pessoas raramente obtém sucesso a menos que se divirtam com o que fazem.',
            imagePostUrl:
              'https://images.pexels.com/photos/4577836/pexels-photo-4577836.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            favorite: false,
            user: {
              name: 'Dale Carnegie',
              id: 3213123,
              followers: 200,
              user: 'dale_eua02',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            },
          },
          {
            id: 8,
            text: '[Sobre o Xadrez] Jogo chinês que aumenta a capacidade de jogar xadrez.',
            imagePostUrl: '',
            favorite: false,
            user: {
              name: 'Millôr Fernandes',
              id: 3213123,
              followers: 200,
              user: 'millor_3215e',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
            },
          },
          {
            id: 9,
            text: 'A liderança é a capacidade de conseguir que as pessoas façam o que não querem fazer e gostem de o fazer.',
            imagePostUrl: '',
            favorite: false,
            user: {
              name: 'Harry Truman',
              id: 3213123,
              followers: 200,
              user: 'harry_truman',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
            },
          },
          {
            id: 10,
            text: 'É possível amar e não ser feliz, é possível ser feliz e não amar, mas amar e simultaneamente ser feliz, isso seria milagre.',
            imagePostUrl:
              'https://images.unsplash.com/photo-1498568715259-5c1dc96aa8e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',
            favorite: false,
            user: {
              name: 'Honoré de Balzac',
              id: 3213123,
              followers: 200,
              user: 'honore_2021',
              tweets: 2400,
              following: 200,
              coverPhotoUrl:
                'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
              photoUrl:
                'https://images.unsplash.com/photo-1599842057874-37393e9342df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            },
          },
        ]
      })
    },
  })

  return server
}

export { makeServer }
