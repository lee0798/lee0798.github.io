
let header_name = document.getElementsByClassName("header-name")
console.log(header_name)
// header_name.addEventListener("click", () => {
//     window.location.href = "index.html"
// })

let testData_0 = JSON.parse(JSON.stringify(TestFile)).data[0];
let testData_1 = JSON.parse(JSON.stringify(TestFile)).data[1];
let testData_2 = JSON.parse(JSON.stringify(TestFile)).data[2];
let testData_3 = JSON.parse(JSON.stringify(TestFile)).data[3];


const members_0 = document.getElementsByClassName("member-0-wrap")
const members_1 = document.getElementsByClassName("member-1-wrap")
const members_2 = document.getElementsByClassName("member-2-wrap")
const members_3 = document.getElementsByClassName("member-3-wrap")


window.onload = function () {
    const year_0 = document.getElementById("year-0");
    year_0.innerText = testData_0.year

    var i = 0
    testData_0.members.forEach(member => {
        members_0[i].children[0].src = member.photo
        members_0[i].children[1].innerText = member.name
        i = i + 1

    });

    var index_0 = 0
    const clickFn_0 = () => {
        if (index_0 === 0) {
            index_0 = 1
            Array.from(members_0).forEach(member => {
                member.classList.toggle("hidden")
            })
        } else {
            index_0 = 0
            Array.from(members_0).forEach(member => {
                member.classList.toggle("hidden")
            })
        }
    }



    const prev_0 = document.getElementById("prev-0");
    const next_0 = document.getElementById("next-0");

    next_0.addEventListener("click", clickFn_0)
    prev_0.addEventListener("click", clickFn_0)


    // ------------------------------------------------

    const year_1 = document.getElementById("year-1");
    year_1.innerText = testData_1.year

    var i = 0
    testData_1.members.forEach(member => {
        members_1[i].children[0].src = member.photo
        members_1[i].children[1].innerText = member.name
        i = i + 1

    });

    var index_1 = 0
    const clickFn_1 = () => {
        if (index_1 === 0) {
            index_1 = 1
            Array.from(members_1).forEach(member => {
                member.classList.toggle("hidden")
            })
        } else {
            index_1 = 0
            Array.from(members_1).forEach(member => {
                member.classList.toggle("hidden")
            })
        }
    }



    const prev_1 = document.getElementById("prev-1");
    const next_1 = document.getElementById("next-1");

    next_1.addEventListener("click", clickFn_1)
    prev_1.addEventListener("click", clickFn_1)


    // ------------------------------------------------

    const year_2 = document.getElementById("year-2");
    year_2.innerText = testData_2.year

    var i = 0
    testData_2.members.forEach(member => {
        members_2[i].children[0].src = member.photo
        members_2[i].children[1].innerText = member.name
        i = i + 1

    });

    var index_2 = 0
    const clickFn_2 = () => {
        if (index_2 === 0) {
            index_2 = 1
            Array.from(members_2).forEach(member => {
                member.classList.toggle("hidden")
            })
        } else {
            index_2 = 0
            Array.from(members_2).forEach(member => {
                member.classList.toggle("hidden")
            })
        }
    }



    const prev_2 = document.getElementById("prev-2");
    const next_2 = document.getElementById("next-2");

    next_2.addEventListener("click", clickFn_2)
    prev_2.addEventListener("click", clickFn_2)


    // ------------------------------------------------

    const year_3 = document.getElementById("year-3");
    year_3.innerText = testData_3.year

    var i = 0
    testData_3.members.forEach(member => {
        members_3[i].children[0].src = member.photo
        members_3[i].children[1].innerText = member.name
        i = i + 1

    });

    var index_3 = 0
    const clickFn_3 = () => {
        if (index_3 === 0) {
            index_3 = 1
            Array.from(members_3).forEach(member => {
                member.classList.toggle("hidden")
            })
        } else {
            index_3 = 0
            Array.from(members_3).forEach(member => {
                member.classList.toggle("hidden")
            })
        }
    }



    const prev_3 = document.getElementById("prev-3");
    const next_3 = document.getElementById("next-3");

    next_3.addEventListener("click", clickFn_3)
    prev_3.addEventListener("click", clickFn_3)

    // ------------------------------------------------


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

};

