import * as React from 'react';
import { Flex as BaseFlex, Box } from 'rebass';
import styled from 'styled-components';

const Flex = styled(BaseFlex)`
  height: 100%;
`;

interface Props {
  headerComponent: React.ReactElement<any>;
  chartComponent: React.ReactElement<any>;
  tableComponent: React.ReactElement<any>;
}

export default ({ headerComponent, chartComponent, tableComponent }: Props) => (
  <Flex flexDirection="column">
    <Box bg="dark-gray">{headerComponent}</Box>
    <Box bg="near-white">{chartComponent}</Box>
    <Box
      bg="near-white"
      css={`
        height: 100%;
      `}
    >
      {tableComponent}
    </Box>
  </Flex>
);
