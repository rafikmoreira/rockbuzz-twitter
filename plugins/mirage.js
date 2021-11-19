import { Server, Model, JSONAPISerializer, Factory, belongsTo } from 'miragejs'
import faker from 'faker'

if (process.env.NODE_ENV === 'development') {
  const server = new Server({
    models: {
      user: Model,
      tweet: Model.extend({
        user: belongsTo(),
      }),
      trend: Model,
    },

    serializers: {
      application: JSONAPISerializer,

      tweet: JSONAPISerializer.extend({
        include: ['user'],
      }),
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.name.findName()
        },
        id() {
          return faker.datatype.uuid()
        },
        followers() {
          return faker.datatype.number(5000)
        },
        user() {
          return `${faker.name.lastName()}`
        },
        tweets() {
          return 2400
        },
        following() {
          return faker.datatype.number(5000)
        },
        coverPhotoUrl() {
          return faker.image.abstract()
        },
        photoUrl() {
          return faker.image.avatar()
        },
      }),
      tweet: Factory.extend({
        id() {
          return faker.datatype.uuid()
        },
        text() {
          return faker.lorem.paragraph()
        },
        imagePostUrl() {
          return `${faker.image.city()}?random=${Math.floor(
            Math.random() * 1000
          )}`
        },
        favorite() {
          return faker.datatype.boolean()
        },
      }),
      trend: Factory.extend({
        id() {
          return faker.datatype.uuid()
        },
        content() {
          return faker.random.word()
        },
      }),
    },

    seeds(server) {
      server.createList('user', 2)
      server.createList('tweet', 13, {
        user: server.create('user'),
      })
      server.createList('trend', 8)
    },

    routes() {
      this.urlPrefix = 'http://localhost:3000'

      // Rotas Tweets

      this.get('/trends', (schema) => {
        return schema.db.trends
      })

      this.get('/tweets', (schema) => {
        return schema.db.tweets
      })

      this.patch('/tweets/favorite/:id', (schema, request) => {
        const { id } = request.params
        const tweet = schema.db.tweets.find(id)
        let favorite = false
        if (!tweet.favorite) {
          favorite = true
        }
        return tweet.update({ favorite })
      })

      // Rotas usuário

      this.get('/user/suggestion', (schema) => {
        return schema.db.users
      })

      this.get('/user/profile', (schema) => {
        const user = schema.create('user', {
          name: faker.name.findName(),
          id: faker.datatype.uuid(),
          followers: faker.datatype.number(5000),
          user: `${faker.name.lastName()}`,
          tweets: 2400,
          following: faker.datatype.number(5000),
          coverPhotoUrl: faker.image.abstract(),
          photoUrl: faker.image.avatar(),
        })
        return user
      })

      this.delete('/user/:id', (schema, request) => {
        const { id } = request.params
        const user = schema.db.users.find(id)
        return user.destroy()
      })
    },
  })
}
