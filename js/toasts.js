 export function showToast(message = "Xabar yuborildi!" ,toastId='success') {
    const toast = document.getElementById(`toast-${toastId}`);
    const text = toast.querySelector('.text-sm');

    text.textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('flex');

    setTimeout(() => {
       hideToast(toastId)
    }, 3000);
}

function hideToast(toastId='success') {
    const toast = document.getElementById(`toast-${toastId}`);
    toast.classList.remove('flex');
    toast.classList.add('hidden');
}
