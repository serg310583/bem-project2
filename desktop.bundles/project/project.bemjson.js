({
    block: "page",
    title: "project",
    head: [
        { elem: "css", url: "project.min.css" },
        { elem: "css", url: "media.css" },
    ],
    // scripts: [{ elem: "js", url: "project.min.js" }],
    // mods: { theme: "islands" },
    content: [
        {
            block: "header",
            content: [
                {
                    elem: "logo",
                    content: "Лого",
                },
                {
                    elem: "search-bar",
                    content: "Строка поиска",
                },
                {
                    elem: "phone",
                    content: "Телефон",
                },
            ],
        },
        {
            block: "my-menu",
            content: {
                elem: "title",
                tag: "p",
                content: "Меню",
            },
        },
        {
            block: "sub-header",
            content: {
                elem: "title",
                tag: "p",
                content: "Шапка",
            },
        },
        {
            block: "content-wrapper",
            content: [
                {
                    block: "aside",
                    content: {
                        elem: "title",
                        tag: "p",
                        content: "Категории + новости",
                    },
                },
                {
                    block: "pageContent",
                    content: {
                        elem: "title",
                        tag: "p",
                        content: "Содержимое страницы",
                    },
                },
            ],
        },
        {
            block: "footer",
            tag: "footer",
            content: {
                elem: "title",
                tag: "p",
                content: "Подвал",
            },
        },
    ],
});
