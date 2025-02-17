import React, { useState } from "react";
import { ConfirmationPanel } from "../index";
import { Meta } from "@storybook/react/types-6-0";
import { Link } from "../..";
export default {
  title: "ds-react/form/ConfirmationPanel",
  component: ConfirmationPanel,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["medium", "small"],
      },
    },
    error: {
      type: "string",
    },
  },
} as Meta;

const content = (
  <>
    Ipsum voluptate pariatur <Link href="#123">testlink</Link> anim officia
    minim ut mollit voluptate exercitation nulla mollit.
  </>
);

export const Default = (props) => {
  return (
    <ConfirmationPanel
      error={props?.error}
      size={props?.size}
      checked={props?.checked ?? undefined}
      label={props?.label ?? "Checkbox label text"}
    >
      {content}
    </ConfirmationPanel>
  );
};

Default.args = {
  label: "Checkbox label text",
  checked: false,
};

export const Small = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ConfirmationPanel
      checked={checked}
      onChange={() => setChecked(!checked)}
      label="Checkbox label text"
      size="small"
    >
      {content}
    </ConfirmationPanel>
  );
};

export const NoContent = () => {
  const [checked, setChecked] = useState(false);
  return (
    <ConfirmationPanel
      checked={checked}
      onChange={() => setChecked(!checked)}
      label="Checkbox label text"
    />
  );
};

export const Error = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="colgap">
      <ConfirmationPanel
        checked={checked}
        onChange={() => setChecked(!checked)}
        label="Checkbox label text"
        error="Adipisicing sint aute quis veniam incididunt duis est sint aute cillum."
      >
        {content}
      </ConfirmationPanel>
      <ConfirmationPanel
        checked={checked}
        onChange={() => setChecked(!checked)}
        label="Checkbox label text"
        error="Adipisicing sint aute quis veniam incididunt duis est sint aute cillum."
        size="small"
      >
        {content}
      </ConfirmationPanel>
    </div>
  );
};
