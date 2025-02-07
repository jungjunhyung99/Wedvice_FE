'use client';

import React, { forwardRef } from 'react';
import type { BottomSheetProps as BaseBottomSheetProps } from 'react-spring-bottom-sheet';
import { BottomSheet as BaseBottomSheet } from 'react-spring-bottom-sheet';
import type { RefHandles } from 'react-spring-bottom-sheet/dist/types';
import './style.css';
import 'react-spring-bottom-sheet/dist/style.css';


export interface BottomSheetProps extends BaseBottomSheetProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  fixedHeight?: number;
}

export const BottomSheet = forwardRef<RefHandles, BottomSheetProps>(
  (
    { open, onDismiss, header, footer, fixedHeight, children, ...props }: BottomSheetProps,
    ref,
  ) => {
    return (
      <BaseBottomSheet
        ref={ref}
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ maxHeight }) => fixedHeight || maxHeight * 0.8}
        expandOnContentDrag
        header={header}
        footer={footer}
        {...props}
      >
        {children}
      </BaseBottomSheet>
    );
  },
);
BottomSheet.displayName = 'BottomSheet';