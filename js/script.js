//(1) 제시된 코드는 앞서 작성한 HTML 로 작성한 파일 실행 시 함께 호출되는 JavaScript 코드로 웹 문서가 완전히 로딩이 완료된 후 JavaScript 코드 내 init 함수를 콜백하는 코드를 작성하세요
window.onload = function() {
    init();
}

function init() {
    //(2) init 함수 콜백 후 ' 추첨하기 ' 버튼이 눌러 졌을 때 숫자를 무작위 추출하는 drawing 함수를 콜백하는 코드를 작성하세요
    document.getElementById("button").onclick = function() {
        document.getElementById("console").innerText = "";
        drawing();
    }

    function drawing() { // 설정된 숫자 범위 내 입력한 개수의 숫자 무작위 추출함수
        //(3) drawing 함수 내 HTML 문서의 입력 폼의 값을 변수에 할당하는 코드를 입력 폼의 개수대로 작성하세요.
        //- 입력 폼 순서 대로 변수 startNUM, endNUM, selectNum 으로 할당
        var startNUM = document.getElementById("startnum").value;
        var endNUM = document.getElementById("endnum").value;
        var selectNum = document.getElementById("selectnum").value;
        var numArray = new Array; // 숫자 넣을 배열
        var randomNum; // 발생한 난수를 위한 변수
        var overlappingFlag; // 생성된 난수와 기존 난수 비교
        while (selectNum) {
            //(4) while 을 사용하여 적합한 난수를 구하는 코드를 작성해 보세요 .
            randomNum = Math.floor((Math.random() * (endNUM - startNUM + 1)) + startNUM);

            overlappingFlag = false;
            for (var a in numArray) {
                if (numArray[a] == randomNum) {
                    overlappingFlag = true;
                    break;
                }
            }
            if (!overlappingFlag) {
                numArray.push(randomNum);
                selectNum--;
            }
        }

        // 랜덤 추출 숫자 정렬하는 함수 작성
        //(5)숫자 정렬 함수를 사용하여 랜덤 추출 숫자를 정렬해 보세요
        numArray.sort(function(a, b) {
            return a - b;
        });

        // (6)추출된 숫자 사이에 (,) 쉼표를 넣어 출력하세요.
        for (var i = 0; i < numArray.length; i++) {
            document.getElementById("console").innerText += numArray[i];
            if (i == numArray.length - 1) {
                break;
            } else {
                document.getElementById("console").innerText += ", ";
            }
        }

    }
}