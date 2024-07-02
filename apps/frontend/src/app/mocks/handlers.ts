import { rest } from 'msw';

const API_URL = 'https://api.airtable.com/v0/appJ0votvrhmT0Sbq/products?';

export const handlers = [
  rest.get(API_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        records: [
          {
            id: '123',
            fields: {
              name: 'New Product',
              price: 100,
              description: 'This is a new product',
            },
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
