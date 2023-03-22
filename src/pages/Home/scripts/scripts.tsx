export const isValidMail = (correo: string): boolean => {
  const input = document.querySelector('.input-correo') as HTMLInputElement;

  if (input) {
    if (correo !== '') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = regex.test(correo);
      if (!isValid) {
        input.value = '';
      }
      return isValid;
    } else {
      input.value = '';
      return true;
    }
  } else {
    return false;
  }
};




export const handleKeyPress = (
  event: React.KeyboardEvent<HTMLInputElement>,
  handleSaveEntries: (event: React.MouseEvent<HTMLButtonElement>) => void,
  isValid: boolean
) => {
  if (event.key === "Enter" && isValid) {
    handleSaveEntries(event as any);
  }
};

