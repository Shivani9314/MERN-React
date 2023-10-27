import React from 'react'



function TopFood() {
    const top_foods = [
        {
            image: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            name: "Pizza",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
            name: "Biryani",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            name: "Burger",
        },
        {
            image: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
            name: "Thali",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
            name: "Chicken",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
            name: "Cake",
        },
        {
            image: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
            name: "Paneer",
        },
    ]

    const top_brands = [
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/e86a5e39bb6f28d211f4f7f45beb4b1b_1611319150.png?output-format=webp",
            name: "Badkul Restaurant",
            minutes: "43 min",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613211963.png?output-format=webp",
            name: "Pizza Hut",
            minutes: "35 min",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433296.png?output-format=webp",
            name: "KFC",
            minutes: "41 min",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/a81aa7b2b818685f91dd2c398fd93ff3_1576056964.png?output-format=webp",
            name: "La Pino'z Pizza",
            minutes: "42 min",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/9a42667649bc0478b638d0f38f9e0489_1611318965.png?output-format=webp",
            name: "Jharoka Restaurant The Arihant Palace",
            minutes: "36 min",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/44c142f0828afa468be7802cac20f057_1611319176.png?output-format=webp",
            name: "RH Chicken Point",
            minutes: "40 min",
        },
        {
            image: "https://b.zmtcdn.com/data/brand_creatives/logos/61513f76a348664ad669dcefa9898e72_1600172446.png?output-format=webp",
            name: "The Tandoor House",
            minutes: "42 min",
        },
    ]

    function render(item) {
        return (
            <div className='top-food-item'>
                <img src={item.image} alt={item.image} />
                <p>{item.name}</p>
            </div>
        )
    }
    function render_brands(item) {
        return (
            <div className='top-brand-item'>
                <img src={item.image} alt={item.image} />
                <p>{item.name}</p>
                <p>{item.minutes}</p>
            </div>
        )
    }

    return (
        <>
            <div className='background-gray'>
                <div className='container'>
                    <div className="top-food-head">
                        <p>Inspiration for your first order</p>
                    </div>
                    <div className="top-food-box">

                        {top_foods.map(render)}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="top-food-head">
                    <p>Top brands for you</p>
                </div>
                <div className="top-food-box">
                    {top_brands.map(render_brands)}
                </div>
            </div>
        </>
    )

}

export default TopFood;