window.addEventListener("DOMContentLoaded", () => {
    const result = document.getElementById("result");
    const fileInput = document.getElementById('file-input');

    const onResult = files => {
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.match(/^image\//)) {
                result.src = URL.createObjectURL(files[i]);
                break;
            }
        }
    };

    fileInput.addEventListener('change', (e) => onResult(e.target.files));

});