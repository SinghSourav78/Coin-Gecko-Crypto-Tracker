import BannerImages from "../../assets/banner.jpg"

function Banner(){
    return (
        // w-full it take full width of parent correspondiling 
        <div className="w-full h-[25rem] relative">

            <img 

                src={BannerImages}
                className="h-full w-full"
             />

             <div className="absolute top-20 left-0 right-0 mx-auto w-[20rem]">

                <div className="flex flex-col gap-4">

                    <div className="font-semibold text-5xl text-white">
                        Crypto Tracker
                    </div>

                    <div className="font-semibold text-sm text-white text-center">
                        Get all info regarding Cryptocurrencies
                    </div>

                </div>

             </div>

        </div>
    )
}

export default Banner;