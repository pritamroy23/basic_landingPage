const Hero =() => {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES. </p>
            </div>
            <div className="hero-image">
                <img src="/images/hero_image.png" alt="hero" />
            </div>
            <div className ="hero-btn">
                <button>shop now</button>
                <button>category</button>


            </div>
            <div className="shopping">
                <p>ALso available on </p>
                <div className="brand-icon">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
            </div>



        </main>


    );

};
export default Hero;