export const defaultModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.7)',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    border: '0',
    borderRadius: '10px',
    width: '48.125rem',
    minHeight: '10rem',
    padding: '3.125rem',
    position: 'fixed',
    top: '50%',
    bottom: 'auto',
    left: '50%',
    right: 'auto',
    transform: 'translate(-50%,-50%)',
  },
};
