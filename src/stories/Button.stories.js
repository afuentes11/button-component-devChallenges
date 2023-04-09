import { Button } from '../components/Button/Button.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: { 
      control: {
        type: 'inline-radio',
        options: ['default', 'outline', 'text']
      }
    },
    size: { 
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg']
      }
    },
    startIcon: { control: 'text' },
    endIcon: { control: 'text' },
    disableShadow: { control: 'boolean' },
    disabled: { control: 'boolean' },
    color: { 
      control: {
        type: 'inline-radio',
        options: ['default', 'primary', 'secondary', 'danger']
      }
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = {
  args: {
    color: "default",
    label: "default",
    disableShadow: false,
    disabled: false,
    size: "md",
    variant: "default",
    startIcon: "",
    endIcon: "",
  },
};

export const Primary = {
  args: {
    color: "primary",
    label: "Primary",
  },
};

export const Secondary = {
  args: {
    color: "secondary",
    label: "secondary",

  },
};

export const Danger = {
  args: {
    color: "danger",
    label: "danger",
  },
};

export const IconButton = {
  args: {
    color: "danger",
    label: "",
    startIcon:"favorite",
    size: "sm"
  },
};

export const IconButtonText = {
  args: {
    color: "danger",
    label: "",
    startIcon:"favorite",
    variant:"text",
    size:"sm"
  },
};


