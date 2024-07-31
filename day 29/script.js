document.addEventListener("DOMContentLoaded", () => {
  const editor1 = document.getElementById("editor1");
  const editor2 = document.getElementById("editor2");

  let isUpdating = false;

  function updateEditor(sourceEditor, targetEditor) {
    if (!isUpdating) {
      isUpdating = true;
      targetEditor.value = sourceEditor.value;
      isUpdating = false;
    }
  }

  editor1.addEventListener("input", () => updateEditor(editor1, editor2));
  editor2.addEventListener("input", () => updateEditor(editor2, editor1));
});
