import { tv } from '../tw';

const popover = tv({
  base: 'bg-content1 rounded border border-default-200',
  variants: {
    size: {
      sm: 'w-40',
      md: 'w-64',
      lg: 'w-96',
      xl: 'w-[34rem]',
      trigger: 'w-[var(--trigger-width)]'
    }
  },
  defaultVariants: {
    size: 'md'
  }
});

export { popover };
