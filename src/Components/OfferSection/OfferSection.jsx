import qualityImage from "../../assets/quality-assurance.jpg"
import satisfactionImg from "../../assets/customer-satisfaction1.jpg"
import trust from "../../assets/trust.png"
import personalization from "../../assets/personalization.jpg"
import improvement from "../../assets/improvement.png"
import Slides from "../Banner/Slides/Slides"
import offerImg from "../../assets/offer.png"
import offerImg2 from "../../assets/offer2.png"

const OfferSection = () => {
   
    return (
        <section className="mt-11">
            <div className="flex justify-around">
                <div className="flex items-center gap-3 border-r-4 border-gray-300 p-6">
                    <img className="w-24" src={qualityImage} alt="" />
                    <p className="px-3">quality assurance</p>
                </div>
                <div className="flex items-center gap-3 border-r-4 border-gray-300">
                    <img className="w-24" src={satisfactionImg} alt="" />
                    <p className="px-3">customer satisfaction</p>
                </div>
                <div className="flex items-center gap-3 border-r-4 border-gray-300">
                    <img className="w-24" src={trust} alt="" />
                    <p className="px-3">Trust and Reliability</p>
                </div>
                <div className="flex items-center gap-3 border-r-4 border-gray-300">
                    <img className="w-24" src={personalization} alt="" />
                    <p className="px-3">Personalization</p>
                </div>
                <div className="flex items-center gap-3 border-r-4 border-gray-300">
                    <img className="w-24" src={improvement} alt="" />
                    <p className="px-3">continuous improvement</p>
                </div>

            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="relative border rounded-3xl p-4">
                <Slides image={offerImg2}></Slides>              
                <h1 className="text-3xl text-center absolute left-6 top-20 text-pink-400 ">-------------------------limited time offer</h1>
                <p className="text-3xl text-center absolute right-24 top-52 text-pink-400 ">Buy Two <br/> Get One</p>
                </div>
                <div className="relative border rounded-3xl p-4 ">
                <Slides image={offerImg}></Slides>
                <h1 className="text-3xl text-center absolute left-6 top-20 text-pink-400 ">Summer Offer</h1>
                <p className="text-3xl text-center absolute left-24 top-52 text-pink-400 ">Save <br/> 20 %</p>              
                </div>
            </div>
            
        </section>
    );
};

export default OfferSection;