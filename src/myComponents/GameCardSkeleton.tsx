import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width={"300px"} borderRadius={10} overflow={'hidden'}>
      <Card.Body>
        <Skeleton height={"200px"} />
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
 