import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  onPageChange,
  number,
}: PaginationItemProps) {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      colorScheme="pink"
      disabled
      _disabled={{ bgColor: "pink.500", cursor: "default" }}
    >
      {number}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
