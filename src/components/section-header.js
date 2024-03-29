import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text as="p" sx={{ variant: 'sectionHeader.subTitle', color: isWhite ? 'white' : 'primary', opacity: isWhite ? 0.7 : 1 }}>
        {slogan}
      </Text>
      <Heading
        as="p" sx={{ variant: 'sectionHeader.Title', color: isWhite ? 'white' : 'heading', opacity: isWhite ? 0.7 : 1 }}>

        {title}
      </Heading>
    </Box>
  );
}

