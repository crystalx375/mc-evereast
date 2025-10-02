// Копирование
async function copyMultiLine() {
  const text = document.getElementById("multiLineText").innerText;
  try {
  await navigator.clipboard.writeText(text);
  showToast("Текст скопирован!");
  } catch (err) {
    console.error('Не удалось скопировать текст: ', err);
  }
    }
function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.background = isError ? "rgba(220,53,69,0.95)" : "rgba(40,167,69,0.95)";
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
async function copyText(id) {
  const text = document.getElementById(id).innerText;
  try {
      await navigator.clipboard.writeText(text);
      showToast("Текст скопирован!");
  } catch (err) {
      console.error('Не удалось скопировать текст: ', err);
      showToast("Ошибка копирования!", true);
  }
}

function showToast(message, isError = false) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.background = isError ? "rgba(220,53,69,0.95)" : "rgba(40,167,69,0.95)";
  toast.classList.add("show");
  setTimeout(() => {
      toast.classList.remove("show");
  }, 2000);
}