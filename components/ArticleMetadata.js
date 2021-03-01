import React from "react";
import { VStack, Tag, Image, Heading, HStack, Avatar, Text } from "@chakra-ui/react";
import dayjs from "dayjs";

const ArticleAuthor = ({ title, categories, thumbnail, author, date }) => {
  return (
    <VStack spacing="5">
      <Heading align="center">{title}</Heading>
      <HStack spacing="5">
        <HStack spacing="3">
          <Avatar src={author.avatar} h={10} w={10} />
          <Text fontSize="lg">{author.name}</Text>
        </HStack>
        <Text fontSize="lg">•</Text>
        <Text fontSize="md">{dayjs(date).format('MMMM DD, YYYY')}</Text>
        <Text fontSize="lg">•</Text>
        <Text fontSize="md">8 min read</Text>
      </HStack>
      <HStack spacing={3}>
        {categories.map(({ category, color }, i) => (
          <Tag key={i} colorScheme={color}>
            {category}
          </Tag>
        ))}
      </HStack>
      <Image src={thumbnail} />
    </VStack>
  );
};

export default ArticleAuthor;
