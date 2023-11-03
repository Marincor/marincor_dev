export function typeWriter(elementIdentify: string, content: string[]) {
  (document.querySelector(elementIdentify) as HTMLElement).innerHTML = "";
  let textElement = document.querySelector(elementIdentify);
  // const textArray = textElement?.innerHTML.split("");
  // console.log(textArray);
  textElement ? textElement.innerHTML = "" : false;
  
  content ? content.forEach((letter: string, index: number) => {
    setTimeout(() => {
      textElement ? textElement.innerHTML += letter : false;
    }, 120 * index);
  }) : false;
}

export const redirectTo = (route: string) => {
  window.open(route, "_blank")
}