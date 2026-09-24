document.addEventListener("DOMContentLoaded", () =>{
    const qrText = document.getElementById("qr-text");
    const generateBtn = document.getElementById("generate-btn");
    const downloadBtn = document.getElementById("download-btn");
    const qrcodeDiv = document.getElementById("qrcode");
    let qrcode = null;

    generateBtn.addEventListener("click", () => {
        const text = qrText.value.trim();

        if(!text){
            alert("please enter some text or URL");
            return;
        }

        qrcodeDiv.innerHTML = "";

        qrcode = new QRCode(qrcodeDiv, {
            text: text,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H,
        })

        downloadBtn.style.display = "block";
    })

    downloadBtn.addEventListener("click", () => {
        const canvas = qrcodeDiv.querySelector("canvas");
        if (!canvas) return;

        const link = document.createElement("a");
        link.download = "qrcode.png";
        link.href = canvas.toDataURL("image/png");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
    
    qrText.addEventListener("keypress", (e) => {
        if (e.key === "enter"){
            generateBtn.click();
        }

    })
})