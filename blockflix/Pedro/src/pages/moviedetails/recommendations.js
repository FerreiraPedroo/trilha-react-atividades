import { useEffect, useState } from "react";
import { movieRecomendationsReturn } from "../../dados/config";
import { ContainerRecommendations, ContainerImagens, TextRecommendations, TextInfo, ImgRecommendations } from "../../styles/moviedetails/recommendations.style"
import Carousel from "../../components/carrousel/carousel";

export default function Recommendations({ id, apiKey }) {
    const [recomendations, setrecomendations] = useState()

    useEffect(() => {
        (async () => {
            setrecomendations(await movieRecomendationsReturn(id, apiKey));
        })()

    }, [])

    if (!Array.isArray(recomendations) || recomendations.length === 0) return (<></>)
    return (
        <>
            <TextRecommendations>RECOMENDAÇÕES</TextRecommendations>
            <ContainerRecommendations>
                <Carousel show={5}>
                    {
                        recomendations.map((recomentation) => {
                            return (
                                <div key={"recomendations-" + recomentation.id}>
                                    <ContainerImagens>
                                        <ImgRecommendations src={"https://image.tmdb.org/t/p/w185" + recomentation.poster_path} alt={recomentation.name} />
                                        <TextInfo href={"/moviedetails/" + recomentation.id}>{recomentation.title}</TextInfo>
                                    </ContainerImagens>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </ContainerRecommendations>
        </>
    )
}