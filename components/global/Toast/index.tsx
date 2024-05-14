

import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React, { memo } from 'react';
import { getRespValue } from '../../../design/desin';

type ToastProps = {
  id: number | string;
  status?: any;
  variant?: string;
  title?: string;
  description?: string;
  isClosable?: boolean;
  toast?: any;
  error?: boolean;
  success?: boolean;
};

const Toast = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  toast,
  error,
  success,
  ...rest
}: ToastProps) => {
  return (
    <Alert
      maxWidth="100%"
      style={{
        minHeight: getRespValue(90),
      }}
      alignSelf="center"
      background='grey'
      flexDirection="row"
      // className="rounded-none w-5/6"
      variant={variant}
      {...rest}
    >
      <VStack space={1} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack space={2} flexShrink={1} alignItems="center">
            {/* {error && (
              <ErrorIconSVG
                style={{
                  width: getRespValue(40),
                  height: getRespValue(40),
                  marginRight: getRespValue(10),
                }}
              />
            )}

            {success && (
              <SuccessIconSVG
                style={{
                  width: getRespValue(40),
                  height: getRespValue(40),
                  marginRight: getRespValue(10),
                }}
              />
            )} */}

            <Text
              fontWeight="medium"
              flexShrink={1}
              fontFamily="aeonik"
              fontSize={getRespValue(18)}
              color={
                variant === 'solid'
                  ? 'lightText'
                  : variant !== 'outline'
                  ? 'darkText'
                  : null
              }
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="4" />}
              _icon={{
                color: variant === 'solid' ? 'lightText' : 'darkText',
              }}
              onPress={() => toast.close(id)}
            />
          ) : null}
        </HStack>
      </VStack>
    </Alert>
  );
};

export default memo(Toast);
