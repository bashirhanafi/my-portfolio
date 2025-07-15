import { Button, Flex } from "@once-ui-system/core";

interface SkillPillProps {
  label: string;
}

export function SkillPill({ label }: SkillPillProps) {
  return (
    <Button
      data-border="rounded"
      variant="secondary"
      size="m"
      weight="default"
      arrowIcon
      disabled
      style={{
        pointerEvents: "none",
        margin: "0 4px" // non-clickable
      }}
    >
      <Flex gap="8" vertical="center">
        {label}
      </Flex>
    </Button>
  );
}
