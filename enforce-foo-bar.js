module.exports = {
  meta: {
    type: "problem", // "problem" | "suggestion" | "layout"
    docs: {
      description:
        "'foo'라는 변수 이름을 가진 변수들은 오직 'bar'라는 값만 갖도록 변환한다.",
      recommended: true,
      url: "https://eslint.org/docs/latest/extend/custom-rules#rule-structure",
    },
    fixable: "code",
    schema: [],
  },
  create(context) {
    return {};
  },
};

// 참고: https://eslint.org/docs/latest/extend/custom-rules#rule-structure
