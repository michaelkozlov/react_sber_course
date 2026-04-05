import { useState } from "react";

interface IConfirmDialogOptions {
  title: string;
  subtitle: string;
}

export const useConfirmDialog = () => {
  const [options, setOptions] = useState<IConfirmDialogOptions | null>(null);
  const [resolve, setResolve] = useState<(result: boolean) => void>(() => {});

  const onConfirm = () => {
    resolve(true);
    setOptions(null);
  };

  const onCancel = () => {
    setOptions(null);
    resolve(false);
  };

  const showConfirmDialog = (options: IConfirmDialogOptions) => {
    setOptions(options);

    return new Promise((resolve) => setResolve(() => resolve));
  };

  return {
    options,
    onConfirm,
    onCancel,
    isOpen: !!options,
    showConfirmDialog,
  };
};
