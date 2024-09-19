//step1 - 인수로 전달된 특정 요소 안의 글자값을 반복돌며 span요소로 감싸서 다시
function splitText(elem, tag) {
  const el = document.querySelector(elem);
  const el_text = el.innerText;

  //for of 반복문 안쪽에서 += 복합대입연산자로
  //태그 문자열이 들어있는 문자값이 계속 쌓일 변수 초기값 설정
  let resultText = "";

  //for of로 문자값을 반복 돌면서 <tag>letter</tag>형태의 문자값을 계속
  //resultText변수에 쌓아나감
  for (let letter of el_text) {
    console.log(letter);
    resultText += `<${tag}>${letter}</${tag}>`;
  }

  el.innerHTML = resultText;
}

splitText("h1", "em");
