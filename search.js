function search() {
    var inputValue = document.getElementById("searchInput").value;
    if (inputValue.trim() !== "") {
        // If the input is not empty, navigate to search.html with the search query
        window.location.href = "search.html?q=" + encodeURIComponent(inputValue);
    }
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        // If the pressed key is Enter, call the search function
        event.preventDefault();
        search();
    }
}

// 현재 URL에서 파라미터 추출 함수
function getParameter(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const text = getParameter('q');

console.log(text)


let jsonData = JSON.parse(JSON.stringify(TestFile));

// 이름으로 검색하는 함수 (여러 결과 반환)
function searchByName(name) {
    // 대소문자를 구분하지 않고 검색하기 위해 소문자로 변환
    var lowerCaseName = name.toLowerCase();

    // 검색된 결과를 저장할 배열
    var results = [];

    // 데이터를 반복하며 이름을 검색
    for (var i = 0; i < TestFile.data.length; i++) {
        var members = TestFile.data[i].members;

        for (var j = 0; j < members.length; j++) {
            var memberName = members[j].name.toLowerCase();

            // 이름이 포함된 경우 결과 배열에 추가
            if (memberName.includes(lowerCaseName)) {
                results.push(members[j]);
            }
        }
    }

    // 결과 배열 반환
    return results.length > 0 ? results : null;
}

// 예제: "루이스"라는 이름으로 검색
var results = searchByName(text);

// 결과 출력
if (results) {
    console.log("검색 결과:", results);
} else {
    console.log("검색 결과가 없습니다.");
}
window.onload = function () {
    const searchResult = document.querySelector(".search-result")
    searchResult.innerHTML = "<span>" + text + "</span>" + " 에 대한 검색결과 " + "<span>" + results.length + "</span>" + " 건"

    for (var i = 0; i < results.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList += "member"
        newDiv.setAttribute("id", results[i].id);

        var newImg = document.createElement("img");
        var newNameSpan = document.createElement("span");

        newImg.src = results[i].photo
        newNameSpan.innerText = results[i].name

        newDiv.appendChild(newImg);
        newDiv.appendChild(newNameSpan);

        // add the newly created element and its content into the DOM
        var currentDiv = document.querySelector(".results");
        currentDiv.appendChild(newDiv)


    }

    // 멤버 클릭 이벤트 핸들러 함수
    function memberClickHandler(event) {
        // 클릭된 멤버의 ID 추출
        const memberId = event.currentTarget.id;

        // 새로운 페이지로 이동 (예시: 멤버 ID를 링크에 추가)
        window.location.href = "detail.html?memberId=" + memberId;
    }

    // 모든 멤버에 클릭 이벤트 추가
    const allMembers = document.getElementsByClassName('member');
    Array.from(allMembers).forEach(member => {
        member.addEventListener('click', memberClickHandler);
    });



}

