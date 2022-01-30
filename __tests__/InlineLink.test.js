import React from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';
import InlineLink from '../src/components/InlineLink';

/* global test, expect, afterEach */

afterEach(cleanup);

test('InlineLink with relative internal url', async () => {
  const href = '/greeting';
  const text = 'My relative link';
  const { getByText } = render(<InlineLink href={href}>{text}</InlineLink>);
  const linkNode = await waitForElement(() => getByText(text));

  expect(linkNode).toHaveTextContent(text);
  expect(linkNode).toHaveAttribute('href', href);
});

// change to href SITE_URL
test('InlineLink with absolute internal url', async () => {
  const href = `https://${process.env.NEXT_PUBLIC_SITE_URL}/about`;
  const text = 'My absolute internal link';
  const { getByText } = render(<InlineLink href={href}>{text}</InlineLink>);
  const linkNode = await waitForElement(() => getByText(text));

  expect(linkNode).toHaveTextContent(text);
  expect(linkNode).toHaveAttribute('href', '/about');
});

test('InlineLink with external url', async () => {
  const href = 'https://google.com';
  const text = 'My external link';
  const { getByText } = render(<InlineLink href={href}>{text}</InlineLink>);

  const linkNode = await waitForElement(() => getByText(text));

  expect(linkNode).toHaveTextContent(text);
  expect(linkNode).toHaveAttribute('href', href);
  expect(linkNode).toHaveAttribute('target', '_blank');
  expect(linkNode).toHaveAttribute('rel', 'noreferrer noopener');
});

test('InlineLink with internal url & target _blank', async () => {
  const href = '/about';
  const text = 'My link';
  const { getByText } = render(
    <InlineLink href={href} target="_blank">
      {text}
    </InlineLink>
  );

  const linkNode = await waitForElement(() => getByText(text));

  expect(linkNode).toHaveTextContent(text);
  expect(linkNode).toHaveAttribute('href', href);
  expect(linkNode).toHaveAttribute('target', '_blank');
  expect(linkNode).toHaveAttribute('rel', 'noreferrer noopener');
});

test('InlineLink with internal url & target _self', async () => {
  const href = '/about';
  const text = 'My link';
  const { getByText } = render(
    <InlineLink href={href} target="_self">
      {text}
    </InlineLink>
  );

  const linkNode = await waitForElement(() => getByText(text));

  expect(linkNode).toHaveTextContent(text);
  expect(linkNode).toHaveAttribute('href', href);
  expect(linkNode).toHaveAttribute('target', '_self');
});
