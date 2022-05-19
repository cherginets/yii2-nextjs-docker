import {toast, ToastContent, ToastPromiseParams} from "react-toastify";
import {UpdateOptions} from "react-toastify/dist/types";

export const toastSuccess = (content: ToastContent) => toast.success(content, {});

type SuccessParamType<T> = string | UpdateOptions<T>;
export function toastPromise<T extends any>(
  content: Promise<T>,
  success: SuccessParamType<T> = 'Успех',
  error: ToastPromiseParams['error'] = 'Ошибка',
  pending: ToastPromiseParams['pending'] = 'Загрузка...'
): Promise<T> {
  return toast.promise<T>(content, {
    success, error, pending
  })
}

// todo сделать приём объекта error
export const toastError = (content: ToastContent) => toast.error(content, {})
