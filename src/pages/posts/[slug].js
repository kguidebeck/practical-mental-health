import React from 'react';
import { NextSeo } from 'next-seo';
import Container from 'components/Container';
import { H1 } from 'components/H';

const SinglePost = (props) => (
  <main>
    <NextSeo
      title={`Post ${props.postId}`}
      openGraph={{
        title: `Post ${props.postId}`,
        description: 'I am description',
      }}
    />
    <Container>
      <div>
        <H1>My blog post #{props.postId}</H1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </Container>
  </main>
);

export const getStaticProps = async ({ params }) => ({
  props: { postId: params.slug },
});

// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
export const getStaticPaths = async () => ({
  paths: [
    { params: { slug: '1' } },
    { params: { slug: '2' } },
    { params: { slug: '10' } },
  ],
  fallback: false,
});

export default SinglePost;
