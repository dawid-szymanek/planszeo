let product_list =[
        {name: "Monopoly", type: "premiera", year: 2022, month: 1, day: 1, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 2, day: 3, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2022, month: 3, day: 6, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 4, day: 23, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 5, day: 20, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 6, day: 14, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 7, day: 10, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 8, day: 4, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 9, day: 7, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 10, day: 6, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 11, day: 21, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2021, month: 12, day: 22, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 1, day: 20, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 2, day: 14, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 3, day: 9, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 4, day: 16, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 5, day: 9, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 6, day: 13, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 7, day: 12, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2022, month: 8, day: 27, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 9, day: 25, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 10, day: 2, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 11, day: 6, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2022, month: 12, day: 5, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 1, day: 28, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 2, day: 24, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 3, day: 30, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 4, day: 17, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 5, day: 20, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 6, day: 14, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 7, day: 10, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 8, day: 4, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 9, day: 7, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 10, day: 6, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 11, day: 21, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 12, day: 22, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 1, day: 20, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 2, day: 14, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 3, day: 9, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 4, day: 16, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2022, month: 5, day: 9, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 6, day: 13, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 7, day: 12, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 8, day: 27, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 9, day: 25, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 10, day: 2, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2022, month: 11, day: 6, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 12, day: 5, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 1, day: 28, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2021, month: 2, day: 24, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 3, day: 30, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 4, day: 17, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 5, day: 20, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 6, day: 14, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 7, day: 10, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 8, day: 4, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 9, day: 7, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 10, day: 6, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 11, day: 21, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2021, month: 12, day: 22, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 1, day: 20, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 2, day: 14, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 3, day: 9, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 4, day: 16, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 5, day: 9, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 6, day: 13, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 7, day: 12, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2022, month: 8, day: 27, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 9, day: 25, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 10, day: 2, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 11, day: 6, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2022, month: 12, day: 5, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 1, day: 28, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 2, day: 24, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 3, day: 19, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 4, day: 17, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 5, day: 18, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 6, day: 14, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 7, day: 10, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 8, day: 31, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 9, day: 7, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 10, day: 18, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 11, day: 21, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 12, day: 22, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 1, day: 20, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 2, day: 14, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 3, day: 9, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 4, day: 16, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2022, month: 5, day: 9, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 6, day: 18, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 7, day: 12, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 8, day: 27, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 9, day: 19, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2021, month: 10, day: 2, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "dodruk", year: 2022, month: 11, day: 19, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"},
        {name: "Monopoly", type: "premiera", year: 2022, month: 12, day: 31, link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}     
]

export {product_list};