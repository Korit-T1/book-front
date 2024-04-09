export const REGEX = {
    username: {
        regexr: /^[A-Za-z0-9]{5,10}$/,
        text: "영문자, 숫자 조합 5~10자리 이어야 합니다."
    },
    password: {
        regexr: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/,
        text: "영문자와 숫자, 특수문자 조합으로 최소 8자리 이어야 합니다."
    },
    name: {
        regexr: /^[가-힣]{2,}$/,
        text: "최소 두 글자의 한글로 표시해주세요."
    },
    email: {
        regexr: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
        text: "이메일 형식이어야 합니다."
    },
    phone: {
        regexr: /^010-[0-9]{4}-[0-9]{4}$/,
        text: "올바른 휴대전화 번호 형식을 입력해주세요.\n예: 010-1234-1234"
    },
    address: {
        regexr: "",
        text: "주소를 적어주세요."
    },
    gender: {
        regexr: "",
        text: "성별을 표시해주세요."
    },
    age: {
        regexr: /^[1-99]*$/,
        text: "숫자만 입력해 주세요."
    },
    birth: {
        regexr: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
        text: "올바른 생년월일 형식을 입력해주세요.\n예: 2000-01-01"
    },
}