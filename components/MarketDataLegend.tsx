import * as React from 'react';
import { Flex, Box } from 'rebass';
import { Button } from './base/Button';
import { ButtonText, FormLabel } from './base/Typography';
import DateInput from './base/DateInput';

interface Props {
  instrumentList: Array<number>;
  activeInstrumentList: Array<number>;
  onToggle: (instrumentId: number) => void;
  onChangeFrom: (date: string) => void;
  onChangeTo: (date: string) => void;
}

export default ({
  instrumentList,
  activeInstrumentList,
  onToggle,
  onChangeFrom,
  onChangeTo,
}: Props) => {
  return (
    <Flex>
      <Box width={1}>
        {instrumentList.map(instrumentId => (
          <Button
            variant={
              activeInstrumentList.includes(instrumentId)
                ? 'primary'
                : 'primary-outline'
            }
            m={1}
            key={instrumentId}
            onClick={() => onToggle(instrumentId)}
          >
            <ButtonText>{`${instrumentId}`}</ButtonText>
          </Button>
        ))}
      </Box>
      <Flex alignItems="center">
        <FormLabel p={1} color="text-invert">
          From
        </FormLabel>
        <DateInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChangeFrom(event.target.value)
          }
        />
        <FormLabel p={1} ml={2} color="text-invert">
          To
        </FormLabel>
        <DateInput
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChangeTo(event.target.value)
          }
        />
      </Flex>
    </Flex>
  );
};
