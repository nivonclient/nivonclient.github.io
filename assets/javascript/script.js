function redirectToDownload() {
    var fileUrl = "https://nivonclient.github.io/assets/client/launcher.jar";

    var xhr = new XMLHttpRequest();

    xhr.open("GET", fileUrl, true);

    xhr.responseType = "blob";

    xhr.onload = function () {
        var blob = new Blob([xhr.response], { type: "application/octet-stream" });

        var link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "launcher.jar";
        document.body.appendChild(link);
        
        link.click();
    };

    xhr.send();
}

function showTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.add('active');
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('active');
}

function updateTooltipPosition(e) {
    const x = e.clientX - 250;
    const y = e.clientY - 300;

    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
}

function toggle() {
    const onOffElements = document.querySelectorAll('.on_off');

    onOffElements.forEach(function (onOffElement) {
        onOffElement.addEventListener('click', function () {
            const isActive = onOffElement.classList.contains('active');

            if (!isActive) {
                onOffElement.classList.add('active');
            } else {
                onOffElement.classList.remove('active');
            }
        });
    });
};

document.addEventListener('DOMContentLoaded', toggle);
document.addEventListener('mousemove', updateTooltipPosition);