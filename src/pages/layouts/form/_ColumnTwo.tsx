import { Stack, Input, Label } from '@ubie/ubie-ui';
import styles from './_ColumnTwo.module.css';
import type { FC } from 'react';

export const ColumnTwo: FC = () => (
  <div className={styles.column}>
    <Stack spacing="xs">
      <Label htmlFor="lastname">姓</Label>
      <Input id="lastname" />
    </Stack>

    <Stack spacing="xs">
      <Label htmlFor="firstName">名</Label>
      <Input id="firstName" />
    </Stack>

    <Stack spacing="xs">
      <Label htmlFor="lastname-kana">セイ</Label>
      <Input id="lastname-kana" />
    </Stack>

    <Stack spacing="xs">
      <Label htmlFor="firstName-kana">メイ</Label>
      <Input id="firstName-kana" />
    </Stack>
  </div>
);
