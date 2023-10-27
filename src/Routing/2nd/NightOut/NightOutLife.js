import React from 'react'

function NightOutLife() {

    const items =[
        {
            image: 'https://b.zmtcdn.com/data/pictures/3/18746733/9b38fe0b7ff122115a59d7babd607e02_o2_featured_v2.jpg?output-format=webp',
            title : 'Asanso',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/chains/2/18884062/2e23622ebaebb15e7c38f65299e840eb_o2_featured_v2.jpg?output-format=webp',
            title : 'Snack Attack',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.0",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/5/20485965/836043509ea2e4f11c485536a904e2c7_o2_featured_v2.jpg?output-format=webp',
            title : "La'milano Pizerria",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg?output-format=webp',
            title : "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/2/18815432/ad8a51352c4a49b57c1462e1ffb4f584_o2_featured_v2.jpg?output-format=webp',
            title : 'Moti Mahal Delux',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/chains/3/18745503/f4c4a07960740a7dda611ff1b487113d_o2_featured_v2.jpg?output-format=webp',
            title : "Naidu's Dilli Ki Gali Parathe Wali",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/8/19017478/788ef1dc2a6f713070f6dc76db51f591_o2_featured_v2.jpg?output-format=webp',
            title : 'Kamling Resturant',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/5/18746285/a51939a59109cc047aee2881b3ae70c2_o2_featured_v2.jpg?output-format=webp',
            title : 'Badkul Resturant',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/chains/5/18935565/142005c4b66fe3a4e08e4dda1081c52a_o2_featured_v2.jpg?output-format=webp',
            title : 'Munna Hotel',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/3/18746733/9b38fe0b7ff122115a59d7babd607e02_o2_featured_v2.jpg?output-format=webp',
            title : 'Asanso',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/chains/2/18884062/2e23622ebaebb15e7c38f65299e840eb_o2_featured_v2.jpg?output-format=webp',
            title : 'Snack Attack',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.0",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/5/20485965/836043509ea2e4f11c485536a904e2c7_o2_featured_v2.jpg?output-format=webp',
            title : "La'milano Pizerria",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/chains/5/18825615/90cb0b9c10ff79668233178a10abc6f3_o2_featured_v2.jpg?output-format=webp',
            title : "Popular Fresh Momos 'N' More",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/2/18815432/ad8a51352c4a49b57c1462e1ffb4f584_o2_featured_v2.jpg?output-format=webp',
            title : 'Moti Mahal Delux',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/chains/3/18745503/f4c4a07960740a7dda611ff1b487113d_o2_featured_v2.jpg?output-format=webp',
            title : "Naidu's Dilli Ki Gali Parathe Wali",
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/8/19017478/788ef1dc2a6f713070f6dc76db51f591_o2_featured_v2.jpg?output-format=webp',
            title : 'Kamling Resturant',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/5/18746285/a51939a59109cc047aee2881b3ae70c2_o2_featured_v2.jpg?output-format=webp',
            title : 'Badkul Resturant',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
        {
            image: 'https://b.zmtcdn.com/data/pictures/chains/5/18935565/142005c4b66fe3a4e08e4dda1081c52a_o2_featured_v2.jpg?output-format=webp',
            title : 'Munna Hotel',
            food_type: "Chinese, Fast Food, Momos 'N' More",
            price: "150 for one",
            rating: "4.1",
            safety_img: "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
            other_text: "Follows all Max safety ensure Follows all Max safety ensureFollows all Max safety ensureFollows all Max safety ensure",
            other_hike_logo: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png",
            time: "45 min",
            offer: "60% OFF up to 120"
        },
    ]

    function render(props){


        return (
            <div className='card-item'>

                <div className="image">
                    <p className='offer pos'>{props.offer}</p>
                    <p className='time pos'>{props.time}</p>
                    <img src={props.image} alt="" />
                </div>
                <div className="card-details">
                    <p className='title'>{props.title}</p>
                    <p className='rating'>{props.rating} &#9733;</p>
                    <p className="des">{props.food_type.slice(0, 23)}...</p>
                    <p className="price">&#8377;{props.price}</p>
                </div>
                <hr />
                <div className="other">
                    <img src={props.safety_img} alt="" />
                    <p>{props.other_text.slice(0, 50)}</p>
                    <img src={props.other_hike_logo} alt="" />
                </div>

            </div>
        )
    }
  return (
    <div>
        <div className="top-food-head mt5">
            <p>Nightlife Restaurants in Jabalpur, Madhya Pradesh, India</p>
                <div className="card">
                    {items.map(render)}
                </div>
        </div>
    </div>
  )
}

export default NightOutLife