import { rest } from 'msw';

const API_URL = 'https://randomuser.me/api/?results=10';

export const handlers = [
  rest.get(API_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            name: {
              first: 'John',
              last: 'Maverick',
            },
            email: 'john@maverick.uk',
            id: {
              name: '123',
            },
          },
          {
            name: {
              first: 'Jane',
              last: 'Doe',
            },
            email: 'jane@doe.uk',
            id: {                           ////////
              name: '456',              // 10 minutes //
            },                              ////////
          },
        ],
      })

      // ctx.status(200),
      // ctx.json({})

      // ctx.status(500),
      // ctx.json({})
    );
  }),

  rest.post('/login', (req, res, ctx) => {
    //const { username } = req.body;

    return res(
      ctx.json({
        id: '111-111-222-222',
        email: 'xxx',
        //username: username,
        //firstName: "John",
        //lastName: "Maverick",
      })
    );
  }),
];
