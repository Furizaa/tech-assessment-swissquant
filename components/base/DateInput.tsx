import * as React from 'react';
import styled from 'styled-components';

const BaseInput = styled('input')`
  font-family: ${p => p.theme.fonts.sansSerif};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: ${p => p.theme.lineHeights['input']};
  font-weight: ${p => p.theme.fontWeights[0]};
  border-radius: ${p => p.theme.radii[2]}px;
  border: ${p => p.theme.borders[2]};
  border-color: ${p => p.theme.colors['gray']};
  width: 100%;
`;

export default (props: any) => <BaseInput type="date" {...props} />;
