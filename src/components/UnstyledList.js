import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns
 */
const UnstyledList = styled.ul.attrs({ role: 'list' })`
  list-style: none;
  padding: 0;
  margin: 0;
`;

UnstyledList.Item = styled.li`
  display: ${(props) => props.display || 'inline-block'};
`;

UnstyledList.Item.propTypes = {
  display: PropTypes.string,
};

export default UnstyledList;
