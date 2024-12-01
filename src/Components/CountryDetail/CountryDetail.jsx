import CountryData from "../CountryData/CountryData";

// const CountryDetail = (props) =>{
//     const{country , handleVisitedCountry , handleVisitedFlags} = props
// };
const CountryDetail = ({country , handleVisitedCountry , handleVisitedFlags}) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountryData

country = {country}
handleVisitedCountry = {handleVisitedCountry}
handleVisitedFlags = {handleVisitedFlags}
            
            ></CountryData>

            {/* <CountryData
            {...props}
            ></CountryData> */}
        </div>
    );
};

export default CountryDetail;