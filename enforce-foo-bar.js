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
    return {
      VariableDeclarator(node) {
        if (node.parent.kind === "const") {
          if (node.id.type === "Identifier" && node.id.name === "foo") {
            if (
              node.init &&
              node.init.type === "Literal" &&
              node.init.value !== "bar"
            ) {
              context.report({
                node,
                message:
                  "'const foo'에 'bar'가 아닌 값이 할당되었습니다. 작업이 필요한 값: {{ notBar }}.",
                data: {
                  notBar: node.init.value,
                },
                fix(fixer) {
                  return fixer.replace.Text(node.init, '"bar"');
                },
              });
            }
          }
        }
      },
    };
  },
};

// 참고: https://eslint.org/docs/latest/extend/custom-rules#rule-structure
