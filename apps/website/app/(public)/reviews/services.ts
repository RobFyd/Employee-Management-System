import { format } from 'date-fns';

type Review = {
  id: string;
  content: string;
  author: string;
  created_at: string;
};

type AirtableReviewResponseDto = {
  records: {
    id: string;
    fields: {
      content: string;
      author: string;
      created_at: string;
    };
  }[];
};

export const fetchReviews = async () => {
  const response = await fetch(
    `${process.env.AIRTABLE_BASE_URL}/Review?view=default&sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=asc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
      },
    }
  );
  const data: AirtableReviewResponseDto = await response.json();
  const reviews: Review[] = [];
  data.records.forEach((elem) => {
    reviews.push({
      id: elem.id,
      content: elem.fields.content,
      author: elem.fields.author,
      created_at: format(elem.fields.created_at, 'hh:mm:ss dd/MM/yyyy'),
    });
  });
    return reviews;
};
