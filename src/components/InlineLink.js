import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { position } from 'polished';

if (
  process.env.NODE_ENV !== 'production' &&
  !process.env.NEXT_PUBLIC_SITE_URL
) {
  // eslint-disable-next-line no-console
  console.warn('InlineLink.js: No SITE_URL set in .env');
}

const InlineLink = ({
  href,
  target,
  children,
  alwaysRenderChildren,
  ...rest
}) => {
  const outboundTarget = target || '_blank';
  const siteUrl = new RegExp(
    `https?://(www.)?${process.env.NEXT_PUBLIC_SITE_URL}/?`,
    'g'
  );

  // This is useful in cases where a link is optional and you still want the content to render either way.
  if (!href) return alwaysRenderChildren ? children : null;
  const formatInternal = href.replace(siteUrl, '/');

  return formatInternal.match(/^(https?:)?\/\/|mailto:/) ||
    typeof target !== 'undefined' ? (
    <a
      href={formatInternal}
      target={outboundTarget}
      rel={outboundTarget === '_blank' ? 'noreferrer noopener' : undefined}
      {...rest}
    >
      {children}
    </a>
  ) : (
    <Link href={formatInternal}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

InlineLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  alwaysRenderChildren: PropTypes.bool,
};

/**
 * Expands clickable area for links. The parent should
 * probably be `position: relative`
 */
export const BreakoutLink = styled(InlineLink)`
  &::before {
    ${position('absolute', 0)}
    content: '';
    z-index: 2;
  }
`;

export default InlineLink;
