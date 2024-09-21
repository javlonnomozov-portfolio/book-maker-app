function bookMaker4Pages(pageCount) {
  const r1 = [];
  const r2 = [];
  for (let i = 0; i <= pageCount / 2 - 2; i += 2) {
    r1[i] = i + 2;
    r1[i + 1] = pageCount - i - 1;
    r2[i + 1] = r1[i] - 1;
    r2[i] = r1[i + 1] + 1;
  }
  return [r1, r2];
}
const r1Elem = document.getElementById("r1");
const r2Elem = document.getElementById("r2");
const typeElem = document.getElementById("type");
const pagesElem = document.getElementById("pages");

function generate() {
  if (pagesElem.value === "1x4") {
    if (typeElem.value === "epsonM1170") {
      let numberOfPages = window.prompt("Kitob betlari sonini kiriting");
      const result = bookMaker4Pages(numberOfPages);
      
      r1Elem.innerHTML = result[0].join(", ");
      
      r2Elem.innerText = result[1].join(", ");
    }
  } else {
    alert(
      "Nomalum turdagi qiymat yoki dasturning tugatilmagan qismidan foydalanishga urunish"
    );
  }
}


function copyToClipboard(elementId) {
  const copyText = document.getElementById(elementId);
  navigator.clipboard
    .writeText(copyText.innerText)
    .then(() => {
      alert("Copied: " + copyText.innerText);
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
}
