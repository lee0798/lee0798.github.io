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

// 현재 URL에서 memberId 추출
const memberId = getParameter('memberId');
console.log(memberId);

function findMemberById(id) {
    for (let i = 0; i < TestFile.data.length; i++) {
        const members = TestFile.data[i].members;
        for (let j = 0; j < members.length; j++) {
            if (members[j].id === id) {
                return members[j];
            }
        }
    }
    // Return null if the member with the given id is not found
    return null;
}

const foundMember = findMemberById(memberId);

if (foundMember) {
    console.log("Found member:", foundMember);
} else {
    console.log("Member not found with id:", memberId);
}

window.onload = function () {
    const memberImg = document.querySelector(".des-member-img")
    memberImg.src = foundMember.photo

    const memberName = document.querySelector(".des-member-name")
    memberName.innerText = foundMember.name

    const memberDes = document.querySelector(".des-member-description")
    memberDes.innerText = "〰️\n " + foundMember.description

}
