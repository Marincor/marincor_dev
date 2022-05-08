export function typeWriter(elementIdentify: string) {
    let textElement = document.querySelector(elementIdentify);
    const textArray = textElement?.innerHTML.split("");
    textElement ? textElement.innerHTML = "" : false;
    
    textArray ? textArray.forEach((letter: string, index: number) => {
      setTimeout(() => {
        textElement ? textElement.innerHTML += letter : false;
      }, 120 * index);
    }) : false;
}
