import * as React from 'react';
import { Flex as BaseFlex, Box } from 'rebass';
import styled from 'styled-components';

const Flex = styled(BaseFlex)`
  height: 100%;
`;

interface Props {
  leftComponent: React.ReactElement<any>;
  rightComponent: React.ReactElement<any>;
}

export default ({ leftComponent, rightComponent }: Props) => (
  <Flex alignItems="stretch">
    <Box width="360px" bg="dark-gray">
      {leftComponent}
    </Box>
    <Box width={1} bg="near-white">
      {rightComponent}
    </Box>
  </Flex>
);
