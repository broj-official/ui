import { CheckCircle, Warning } from '@assets/svg';
import { createPortal } from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { useTheme } from 'styled-components';

export const ToastProvider = () => {
  const theme = useTheme();

  return createPortal(
    <Toaster
      containerStyle={{
        zIndex: 99999,
      }}
      position={'top-center'}
      toastOptions={{
        duration: 2000,
        style: {
          background: theme.color.gray9,
          boxShadow:
            '0px 7px 7px -5px rgba(0, 0, 0, 0.04), 0px 10px 15px -5px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.05)',
          borderRadius: 8,
          fontSize: 14,
          fontFamily: 'BROJSans-Semibold',
          fontWeight: 600,
          lineHeight: '150%',
          color: theme.color.gray1,
        },
        success: {
          icon: <CheckCircle />,
        },
        error: {
          icon: <Warning />,
        },
      }}
    />,
    document.body,
  );
};
