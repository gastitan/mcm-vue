/* Handling Errors through Toastr */

import toastr from 'toastr'

export const successToaster = (title, desc) => {
  toastr.options.toastClass = 'toastr';
  return (toastr.success(desc, title))
}
export const errorToaster = (title, desc) => {
  toastr.options.toastClass = 'toastr';
  return (toastr.error(desc, title))
}

export const warnToaster = (title, desc) => {
  toastr.options.toastClass = 'toastr';
  return (toastr.warning(desc, title))
}

export const infoToaster = (title, desc) => {
  toastr.options.toastClass = 'toastr';
  return (toastr.info(desc, title))
}